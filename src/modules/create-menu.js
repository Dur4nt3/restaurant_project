import { build as buildElement } from "./element-manipulator.js";

function buildMenuTitle() {
    const titleCont = buildElement("div", "menu-title-cont");

    const titleText = buildElement("h1", "menu-title");

    const specialText = buildElement("span", "special-text");
    specialText.textContent = "Secret";

    titleText.appendChild(specialText);
    titleText.appendChild(document.createTextNode(" Menu"));

    const titleInfo = buildElement("p", "menu-title-comment");
    titleInfo.textContent = "Unlock a world of hidden flavors with our exclusive, off-the-menu creations--crafted for the adventurous foodie.";

    titleCont.appendChild(titleText);
    titleCont.appendChild(titleInfo);

    return titleCont;
}


function buildMenuItem(name, description) {
    const itemCont = buildElement("div", "menu-item");

    const itemTitle = buildElement("h3", "menu-item-title");
    itemTitle.textContent = name;

    const itemDescription = buildElement("p", "menu-item-description");
    itemDescription.textContent = description;

    itemCont.appendChild(itemTitle);
    itemCont.appendChild(itemDescription);

    return itemCont;
}

function buildMenuItems() {
    const itemsCont = buildElement("div", "menu-items-cont");

    // Item 1
    itemsCont.appendChild(
        buildMenuItem("Charred Citrus & Avocado Tartare",
            "Charred citrus and creamy avocado with cucumber, smoked salt, and jalapeño olive oil"
        )
    );

    // Item 2
    itemsCont.appendChild(
        buildMenuItem("Crispy Duck Spring Rolls with Tamarind Plum Sauce",
            "Fried duck-filled spring rolls with a tangy tamarind plum dipping sauce"
        )
    );

    // Item 3
    itemsCont.appendChild(
        buildMenuItem("Pistachio-Crusted Goat Cheese with Fig Jam & Crostini",
            "Goat cheese crusted with pistachios, paired with fig jam and crispy crostini"
        )
    );

    // Item 4
    itemsCont.appendChild(
        buildMenuItem("Black Garlic & Miso Glazed Sea Bass with Sesame-Avocado Mash",
            "Sea bass glazed with black garlic-miso, served with sesame-avocado mash and roasted purple potatoes"
        )
    );

    // Item 5
    itemsCont.appendChild(
        buildMenuItem("Coffee-Rubbed Lamb Chops with Espresso-Balsamic Reduction",
            "Coffee-rubbed lamb chops with an espresso-balsamic reduction, sweet potato purée, and spinach"
        )
    );

    // Item 6
    itemsCont.appendChild(
        buildMenuItem("Pumpkin & Sage Tortellini in Brown Butter Hazelnut Sauce",
            "Pumpkin tortellini in brown butter sauce with crispy sage and toasted hazelnuts"
        )
    );

    // Item 7
    itemsCont.appendChild(
        buildMenuItem("Passionfruit & Coconut Panna Cotta with Mango Gelée",
            "Tropical panna cotta with passionfruit, coconut cream, and mango gelée"
        )
    );

    // Item 8
    itemsCont.appendChild(
        buildMenuItem("Caramelized Banana & Hazelnut Mille-Feuille",
            "Layered puff pastry with caramelized banana and hazelnut cream"
        )
    );

    // Item 9
    itemsCont.appendChild(
        buildMenuItem("Dark Chocolate & Matcha Tart with Yuzu Sorbet",
            "Rich chocolate tart with matcha and a refreshing yuzu sorbet"
        )
    );

    return itemsCont;
}

export function buildMenuCont() {
    const menuTitle = buildMenuTitle();

    const menuItems = buildMenuItems();

    return { title: menuTitle, items: menuItems};
}