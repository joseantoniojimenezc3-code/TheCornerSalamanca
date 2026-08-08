const localeValue = (value, language) => {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[language] ?? value.en ?? value.es ?? "";
};

const formatPrice = (price, language) => {
  if (!price) return "";
  if (/ea\.$/i.test(price)) {
    const value = price.replace(/\s*ea\.$/i, "");
    return language === "es" ? `${value.replace(".", ",")} € / ud.` : `€${value} / ea.`;
  }
  return language === "es" ? `${price.replace(".", ",")} €` : `€${price}`;
};

const renderBadges = (badges = [], dictionary, language) => {
  if (!badges.length) return "";
  return `<div class="menu-item__badges">${badges.map((badge) => {
    const label = localeValue(dictionary[badge], language);
    return `<span class="menu-badge menu-badge--${badge}">${label}</span>`;
  }).join("")}</div>`;
};

const renderVariants = (variants = [], language) => {
  if (!variants.length) return "";
  return `<ul class="menu-item__variants" role="list">${variants.map((variant) => `
    <li><span>${localeValue(variant.label, language)}</span><span>${formatPrice(variant.price, language)}</span></li>
  `).join("")}</ul>`;
};

const renderItem = (item, data, language) => `
  <article class="menu-item">
    <div class="menu-item__line">
      <h4>${localeValue(item.name, language)}</h4>
      <p class="menu-item__price">${formatPrice(item.price, language)}</p>
    </div>
    ${item.description ? `<p class="menu-item__description">${localeValue(item.description, language)}</p>` : ""}
    ${renderVariants(item.variants, language)}
    ${renderBadges(item.badges, data.badges, language)}
  </article>
`;

const renderGroup = (group, data, language) => `
  <div class="menu-group">
    <div class="menu-group__heading">
      <h3>${localeValue(group.label, language)}</h3>
      ${group.intro ? `<p>${localeValue(group.intro, language)}</p>` : ""}
    </div>
    <div class="menu-group__items">
      ${(group.items ?? []).map((item) => renderItem(item, data, language)).join("")}
    </div>
  </div>
`;

const renderCategory = (category, data, language, index) => {
  const body = category.groups
    ? category.groups.map((group) => renderGroup(group, data, language)).join("")
    : `<div class="menu-group__items">${(category.items ?? []).map((item) => renderItem(item, data, language)).join("")}</div>`;

  return `
    <details class="menu-category" id="menu-${category.id}" ${index === 0 ? "open" : ""}>
      <summary class="menu-category__summary">
        <span class="menu-category__title">${localeValue(category.label, language)}</span>
        ${category.hours ? `<span class="menu-category__hours">${category.hours}</span>` : ""}
        <span class="menu-category__toggle" aria-hidden="true"></span>
      </summary>
      <div class="menu-category__body">
        ${category.intro ? `<p class="menu-category__intro">${localeValue(category.intro, language)}</p>` : ""}
        ${body}
        ${category.id === "eggs-bagels" ? `<p class="menu-category__note">${localeValue(data.notes.bakery, language)}</p>` : ""}
      </div>
    </details>
  `;
};

const renderMenu = (root, data, language) => {
  const notesLabel = language === "es" ? "Notas de la carta" : "Menu notes";
  root.innerHTML = `
    <div class="menu-catalogue__legend" aria-label="${notesLabel}">
      <p><span class="menu-legend__mark menu-legend__mark--vegan" aria-hidden="true"></span>${localeValue(data.badges.vegan, language)}</p>
      <p><span class="menu-legend__mark menu-legend__mark--signature" aria-hidden="true"></span>${localeValue(data.badges.signature, language)}</p>
    </div>
    <div class="menu-catalogue__categories">
      ${data.categories.map((category, index) => renderCategory(category, data, language, index)).join("")}
    </div>
    <div class="menu-catalogue__footnote">
      <p>${localeValue(data.notes.fresh, language)}</p>
      <p>${localeValue(data.notes.allergens, language)}</p>
    </div>
  `;
};

export const initMenu = async () => {
  const root = document.querySelector("[data-menu-root]");
  if (!root) return;

  let data;
  try {
    const response = await fetch("data/menu.json");
    if (!response.ok) throw new Error(`Menu request failed: ${response.status}`);
    data = await response.json();
  } catch (error) {
    console.error(error);
    const language = document.documentElement.lang?.startsWith("es") ? "es" : "en";
    root.innerHTML = `<p class="menu-catalogue__error">${language === "es" ? "No se ha podido cargar la carta. Actualiza la página o consulta a nuestro equipo en el local." : "The menu could not be loaded. Please refresh the page or ask our team in the café."}</p>`;
    return;
  }

  let language = document.documentElement.lang?.startsWith("es") ? "es" : "en";
  renderMenu(root, data, language);

  document.addEventListener("tcs:languagechange", (event) => {
    language = event.detail?.language === "es" ? "es" : "en";
    const openCategories = new Set(
      [...root.querySelectorAll(".menu-category[open]")].map((category) => category.id),
    );

    renderMenu(root, data, language);

    root.querySelectorAll(".menu-category").forEach((category) => {
      category.open = openCategories.has(category.id);
    });
  });
};
