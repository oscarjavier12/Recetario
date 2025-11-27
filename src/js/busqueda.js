// script.js
const recipes = [
    {
        id: 1,
        name: "Pollo al Curry con Arroz",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
        ingredients: ["pollo", "arroz", "curry", "leche de coco", "cebolla", "ajo", "jengibre"],
        fullIngredients: [
            "500g de pechuga de pollo",
            "2 tazas de arroz basmati",
            "2 cucharadas de curry en polvo",
            "400ml de leche de coco",
            "1 cebolla grande",
            "3 dientes de ajo",
            "1 trozo de jengibre fresco"
        ],
        instructions: [
            "Corta el pollo en cubos medianos y sazónalo con sal y pimienta.",
            "Pica finamente la cebolla, el ajo y el jengibre.",
            "En una sartén grande, calienta aceite y sofríe la cebolla hasta que esté transparente.",
            "Agrega el ajo y el jengibre, cocina por 1 minuto.",
            "Añade el pollo y cocina hasta que esté dorado por todos lados.",
            "Incorpora el curry en polvo y mezcla bien.",
            "Vierte la leche de coco y deja hervir a fuego lento por 20 minutos.",
            "Mientras tanto, cocina el arroz según las instrucciones del paquete.",
            "Sirve el curry sobre el arroz y disfruta."
        ],
        time: "45 minutos",
        type: ["Principal"],
        servings: 4,
        cooking: "Estofado",
        difficulty: "Medio"
    },
    {
        id: 2,
        name: "Ensalada Caprese",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800",
        ingredients: ["tomate", "mozzarella", "albahaca", "aceite de oliva"],
        fullIngredients: [
            "4 tomates grandes maduros",
            "250g de mozzarella fresca",
            "Hojas de albahaca fresca",
            "4 cucharadas de aceite de oliva extra virgen",
            "Sal y pimienta al gusto",
            "Vinagre balsámico (opcional)"
        ],
        instructions: [
            "Lava y corta los tomates en rodajas de 1cm de grosor.",
            "Corta la mozzarella en rodajas del mismo grosor.",
            "En un plato, alterna rodajas de tomate y mozzarella.",
            "Coloca hojas de albahaca entre las rodajas.",
            "Rocía con aceite de oliva generosamente.",
            "Añade sal y pimienta al gusto.",
            "Opcionalmente, agrega unas gotas de vinagre balsámico.",
            "Deja reposar 10 minutos antes de servir para que se mezclen los sabores."
        ],
        time: "15 minutos",
        type: ["Entrante", "Vegetariano"],
        servings: 2,
        cooking: "Crudo",
        difficulty: "Fácil"
    },
    {
        id: 3,
        name: "Brownie de Chocolate",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800",
        ingredients: ["chocolate", "mantequilla", "huevos", "azúcar", "harina"],
        fullIngredients: [
            "200g de chocolate negro",
            "150g de mantequilla",
            "3 huevos grandes",
            "200g de azúcar",
            "100g de harina",
            "1 cucharadita de extracto de vainilla",
            "Una pizca de sal"
        ],
        instructions: [
            "Precalienta el horno a 180°C.",
            "Derrite el chocolate con la mantequilla a baño maría.",
            "En un bol, bate los huevos con el azúcar hasta que estén espumosos.",
            "Añade el chocolate derretido y la vainilla a la mezcla de huevos.",
            "Incorpora la harina tamizada y la sal, mezclando suavemente.",
            "Vierte la mezcla en un molde cuadrado engrasado.",
            "Hornea durante 25-30 minutos. El centro debe quedar ligeramente húmedo.",
            "Deja enfriar completamente antes de cortar en cuadrados."
        ],
        time: "50 minutos",
        type: ["Postre"],
        servings: 8,
        cooking: "Horno",
        difficulty: "Fácil"
    },
    {
        id: 4,
        name: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
        ingredients: ["pasta", "huevos", "panceta", "queso parmesano", "pimienta"],
        fullIngredients: [
            "400g de espagueti",
            "4 yemas de huevo",
            "200g de panceta o guanciale",
            "100g de queso parmesano rallado",
            "Pimienta negra recién molida",
            "Sal para el agua de la pasta"
        ],
        instructions: [
            "Pon a hervir agua con sal abundante para la pasta.",
            "Corta la panceta en tiras pequeñas y fríela sin aceite hasta que esté crujiente.",
            "En un bol, mezcla las yemas con el queso parmesano y pimienta.",
            "Cocina la pasta al dente según las instrucciones del paquete.",
            "Reserva 1 taza del agua de cocción antes de escurrir.",
            "Mezcla la pasta caliente con la panceta.",
            "Retira del fuego y añade la mezcla de huevo, removiendo rápidamente.",
            "Agrega agua de cocción poco a poco hasta obtener una textura cremosa.",
            "Sirve inmediatamente con más queso y pimienta."
        ],
        time: "25 minutos",
        type: ["Principal"],
        servings: 4,
        cooking: "Hervido",
        difficulty: "Medio"
    },
    {
        id: 5,
        name: "Guacamole Tradicional",
        image: "https://farm8.staticflickr.com/7118/7019482551_4abd276122.jpg",
        ingredients: ["aguacate", "tomate", "cebolla", "cilantro", "limón", "chile"],
        fullIngredients: [
            "3 aguacates maduros",
            "2 tomates medianos",
            "1/2 cebolla blanca",
            "1 manojo de cilantro fresco",
            "2 limones",
            "1-2 chiles serranos",
            "Sal al gusto"
        ],
        instructions: [
            "Corta los aguacates por la mitad, retira el hueso y saca la pulpa.",
            "Machaca el aguacate con un tenedor dejando algunos trozos.",
            "Pica finamente el tomate, la cebolla y el chile.",
            "Pica el cilantro fresco.",
            "Mezcla todos los ingredientes en un bol.",
            "Exprime los limones sobre la mezcla.",
            "Añade sal al gusto y mezcla bien.",
            "Sirve inmediatamente con totopos o como acompañamiento."
        ],
        time: "15 minutos",
        type: ["Entrante", "Vegano", "Sin Gluten"],
        servings: 6,
        cooking: "Crudo",
        difficulty: "Fácil"
    },
    {
        id: 6,
        name: "Salmón a la Plancha con Limón",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800",
        ingredients: ["salmón", "limón", "ajo", "aceite de oliva", "eneldo"],
        fullIngredients: [
            "4 filetes de salmón (150g cada uno)",
            "2 limones",
            "3 dientes de ajo",
            "4 cucharadas de aceite de oliva",
            "Eneldo fresco",
            "Sal y pimienta al gusto"
        ],
        instructions: [
            "Saca el salmón del refrigerador 15 minutos antes de cocinar.",
            "Sazona los filetes con sal, pimienta y el jugo de medio limón.",
            "Pica finamente el ajo y mézclalo con el aceite de oliva.",
            "Calienta una sartén a fuego medio-alto.",
            "Cocina el salmón con la piel hacia abajo durante 4-5 minutos.",
            "Voltea con cuidado y cocina 3 minutos más.",
            "Durante la cocción, vierte la mezcla de ajo y aceite sobre el pescado.",
            "Sirve con rodajas de limón y eneldo fresco picado."
        ],
        time: "20 minutos",
        type: ["Principal", "Sin Gluten"],
        servings: 4,
        cooking: "A la plancha",
        difficulty: "Fácil"
    },
    {
        id: 7,
        name: "Arroz Frito Asiático",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
        ingredients: ["arroz", "huevos", "guisantes", "zanahoria", "cebolla", "salsa de soja"],
        fullIngredients: [
            "3 tazas de arroz cocido (de un día anterior)",
            "3 huevos",
            "1 taza de guisantes",
            "2 zanahorias",
            "1 cebolla",
            "3 cucharadas de salsa de soja",
            "2 cucharadas de aceite de sésamo",
            "2 dientes de ajo",
            "Cebollino fresco"
        ],
        instructions: [
            "Pica la cebolla, el ajo y corta la zanahoria en cubos pequeños.",
            "Bate los huevos en un bol pequeño.",
            "Calienta aceite en un wok o sartén grande a fuego alto.",
            "Agrega los huevos batidos y revuelve rápidamente, luego retira.",
            "En el mismo wok, sofríe la cebolla y el ajo.",
            "Añade la zanahoria y los guisantes, cocina 3-4 minutos.",
            "Incorpora el arroz y desmenúzalo con la espátula.",
            "Agrega la salsa de soja y el aceite de sésamo.",
            "Vuelve a añadir el huevo revuelto y mezcla bien.",
            "Decora con cebollino picado y sirve caliente."
        ],
        time: "30 minutos",
        type: ["Principal", "Vegetariano"],
        servings: 4,
        cooking: "Salteado",
        difficulty: "Medio"
    },
    {
        id: 8,
        name: "Tacos de Pollo al Pastor",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
        ingredients: ["pollo", "piña", "chile", "cebolla", "cilantro", "tortillas"],
        fullIngredients: [
            "600g de muslos de pollo",
            "1/2 piña fresca",
            "3 chiles guajillo",
            "1 cebolla",
            "Cilantro fresco",
            "12 tortillas de maíz",
            "2 dientes de ajo",
            "Jugo de 2 naranjas",
            "Especias: comino, orégano, achiote"
        ],
        instructions: [
            "Hidrata los chiles en agua caliente y licúalos con ajo, especias y jugo de naranja.",
            "Marina el pollo en esta salsa durante al menos 2 horas.",
            "Corta la piña en trozos pequeños.",
            "Cocina el pollo en una sartén o parrilla hasta que esté bien cocido.",
            "Corta el pollo en trozos pequeños.",
            "Calienta las tortillas en un comal.",
            "Asa la piña brevemente.",
            "Arma los tacos con pollo, piña, cebolla picada y cilantro.",
            "Sirve con salsa y limón al gusto."
        ],
        time: "2 horas 30 minutos",
        type: ["Principal"],
        servings: 6,
        cooking: "A la plancha",
        difficulty: "Medio"
    }
];

let currentRecipes = [];

function searchRecipes(ingredient) {
    ingredient = ingredient.toLowerCase().trim();
    if (!ingredient) {
        return recipes;
    }

    return recipes.filter(recipe =>
        recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient))
    );
}

function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipesGrid');
    const info = document.getElementById('resultsInfo');

    if (recipesToShow.length === 0) {
        grid.innerHTML = '<div class="no-results">No se encontraron recetas con ese ingrediente. ¡Intenta con otro!</div>';
        info.textContent = '';
        return;
    }

    info.textContent = `Se encontraron ${recipesToShow.length} receta${recipesToShow.length > 1 ? 's' : ''}`;

    grid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card" onclick="showRecipe(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                
                <div class="recipe-meta">
                    <div class="meta-row">
                        <span class="meta-label">⏱️ Tiempo:</span>
                        <span>${recipe.time}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">🔥 Cocción:</span>
                        <span>${recipe.cooking}</span>
                    </div>
                </div>

                <div class="ingredients-preview">
                    <strong>Ingredientes principales:</strong><br>
                    ${recipe.ingredients.slice(0, 5).join(', ')}${recipe.ingredients.length > 5 ? '...' : ''}
                </div>
                <div>
                    <button class="view-btn">Ver receta completa</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="modal-image">
        <div class="modal-body">
            <h2 class="modal-title">${recipe.name}</h2>
            
            <div class="modal-meta">
                <div class="meta-item">
                    <span class="meta-label-modal">Tiempo total</span>
                    <span class="meta-value">⏱️ ${recipe.time}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label-modal">Porciones</span>
                    <span class="meta-value">🍽️ ${recipe.servings}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label-modal">Dificultad</span>
                    <span class="meta-value">👨‍🍳 ${recipe.difficulty}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label-modal">Tipo de cocción</span>
                    <span class="meta-value">🔥 ${recipe.cooking}</span>
                </div>
            </div>

            <div class="recipe-tags">
                ${recipe.type.map(t => `<span class="recipe-tag">${t}</span>`).join('')}
            </div>

            <h3 class="section-title">📝 Ingredientes</h3>
            <ul class="ingredients-list">
                ${recipe.fullIngredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>

            <h3 class="section-title">👨‍🍳 Instrucciones</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    currentRecipes = searchRecipes(searchTerm);
    displayRecipes(currentRecipes);
}

document.getElementById('searchBtn').addEventListener('click', handleSearch);

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function () {
        const ingredient = this.getAttribute('data-ingredient');
        document.getElementById('searchInput').value = ingredient;
        handleSearch();
    });
});

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

displayRecipes(recipes);