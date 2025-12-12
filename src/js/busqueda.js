// script.js
const recipes = [
    {
        id: 1,
        name: "Pollo al Curry con Arroz",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
        ingredients: ["pollo", "arroz", "curry", "leche de coco", "cebolla", "ajo", "jengibre"],
        fullIngredients: [
            "125g de pechuga de pollo",
            "0.5 tazas de arroz basmati",
            "0.5 cucharadas de curry en polvo",
            "100ml de leche de coco",
            "0.25 cebolla grande",
            "1 diente de ajo",
            "1 trozo pequeño de jengibre fresco"
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
        servings: 1,
        cooking: "Estofado",
        difficulty: "Medio"
    },
    {
        id: 2,
        name: "Ensalada Caprese",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800",
        ingredients: ["tomate", "mozzarella", "albahaca", "aceite de oliva"],
        fullIngredients: [
            "2 tomates grandes maduros",
            "125g de mozzarella fresca",
            "Hojas de albahaca fresca",
            "2 cucharadas de aceite de oliva extra virgen",
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
        servings: 1,
        cooking: "Crudo",
        difficulty: "Fácil"
    },
    {
        id: 3,
        name: "Brownie de Chocolate",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800",
        ingredients: ["chocolate", "mantequilla", "huevos", "azúcar", "harina"],
        fullIngredients: [
            "25g de chocolate negro",
            "20g de mantequilla",
            "0.5 huevo",
            "25g de azúcar",
            "12g de harina",
            "0.125 cucharadita de extracto de vainilla",
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
        servings: 1,
        cooking: "Horno",
        difficulty: "Fácil"
    },
    {
        id: 4,
        name: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
        ingredients: ["pasta", "huevos", "panceta", "queso parmesano", "pimienta"],
        fullIngredients: [
            "100g de espagueti",
            "1 yema de huevo",
            "50g de panceta o guanciale",
            "25g de queso parmesano rallado",
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
        servings: 1,
        cooking: "Hervido",
        difficulty: "Medio"
    },
    {
        id: 5,
        name: "Guacamole Tradicional",
        image: "https://farm8.staticflickr.com/7118/7019482551_4abd276122.jpg",
        ingredients: ["aguacate", "tomate", "cebolla", "cilantro", "limón", "chile"],
        fullIngredients: [
            "0.5 aguacate maduro",
            "0.3 tomate mediano",
            "1 cucharada de cebolla blanca picada",
            "1 ramita de cilantro fresco",
            "0.3 limón",
            "0.2 chile serrano",
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
        servings: 1,
        cooking: "Crudo",
        difficulty: "Fácil"
    },
    {
        id: 6,
        name: "Salmón a la Plancha con Limón",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800",
        ingredients: ["salmón", "limón", "ajo", "aceite de oliva", "eneldo"],
        fullIngredients: [
            "1 filete de salmón (150g)",
            "0.5 limón",
            "1 diente de ajo",
            "1 cucharada de aceite de oliva",
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
        servings: 1,
        cooking: "A la plancha",
        difficulty: "Fácil"
    },
    {
        id: 7,
        name: "Arroz Frito Asiático",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
        ingredients: ["arroz", "huevos", "guisantes", "zanahoria", "cebolla", "salsa de soja"],
        fullIngredients: [
            "0.75 tazas de arroz cocido (de un día anterior)",
            "1 huevo",
            "0.25 taza de guisantes",
            "0.5 zanahoria",
            "0.25 cebolla",
            "1 cucharada de salsa de soja",
            "0.5 cucharada de aceite de sésamo",
            "0.5 diente de ajo",
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
        servings: 1,
        cooking: "Salteado",
        difficulty: "Medio"
    },
    {
        id: 8,
        name: "Tacos de Pollo al Pastor",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
        ingredients: ["pollo", "piña", "chile", "cebolla", "cilantro", "tortillas"],
        fullIngredients: [
            "100g de muslos de pollo",
            "2 rodajas de piña fresca",
            "0.5 chile guajillo",
            "0.15 cebolla",
            "Cilantro fresco",
            "2 tortillas de maíz",
            "0.3 diente de ajo",
            "Jugo de 0.3 naranja",
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
        servings: 1,
        cooking: "A la plancha",
        difficulty: "Medio"
    }
];

let currentRecipes = [];

function adjustIngredient(ingredient, originalServings, newServings) {
    const ratio = newServings / originalServings;

    // Buscar números en el ingrediente
    return ingredient.replace(/(\d+(?:[.,]\d+)?)\s*(g|kg|ml|l|tazas?|cucharadas?|cucharaditas?|unidades?)?/gi, (match, number, unit) => {
        const originalNumber = parseFloat(number.replace(',', '.'));
        const newNumber = originalNumber * ratio;

        // Formatear el nuevo número
        let formatted;
        if (newNumber % 1 === 0) {
            formatted = newNumber.toString();
        } else if (newNumber < 10) {
            formatted = newNumber.toFixed(1);
        } else {
            formatted = Math.round(newNumber).toString();
        }

        return `${formatted} ${unit ? ' ' + unit : ''}`;
    });
}

let currentServings = 1;

function updateServings(recipeId, newServings) {
    const recipe = recipes.find(r => r.id === recipeId);
    const ingredientsList = document.getElementById('ingredientsList');
    const servingsDisplay = document.getElementById('servingsDisplay');
    const minusBtn = document.getElementById('minusBtn');
    const plusBtn = document.getElementById('plusBtn');
    
    // Validar que las porciones estén en un rango válido
    if (newServings < 1 || newServings >= 16) return;
    
    // Actualizar el valor actual
    currentServings = newServings;
    servingsDisplay.textContent = '🍽️' + currentServings;

    // Actualizar los botones con el nuevo valor
    minusBtn.onclick = () => updateServings(recipeId, Math.max(1, currentServings - 1));
    plusBtn.onclick = () => updateServings(recipeId, currentServings + 1);

    // Recalcular ingredientes
    ingredientsList.innerHTML = recipe.fullIngredients.map(ing =>
        `<li>${adjustIngredient(ing, recipe.servings, currentServings)}</li>`
    ).join('');
}

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

    // Resetear porciones al abrir
    currentServings = recipe.servings;

    content.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
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
                    <div class="servings-control">
                        <button class="servings-btn" id="minusBtn"><i class="bi bi-caret-left-square"></i></button>
                        <span contenteditable="true" class="servings-display" id="servingsDisplay">🍽️${recipe.servings}</span>
                        <button class="servings-btn" id="plusBtn"><i class="bi bi-caret-right-square"></i></button>
                    </div>
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
            <ul class="ingredients-list" id="ingredientsList">
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

    // Agregar event listeners después de crear el HTML
    document.getElementById('minusBtn').onclick = () => updateServings(recipe.id, Math.max(1, currentServings - 1));
    document.getElementById('plusBtn').onclick = () => updateServings(recipe.id, currentServings + 1);
    
    // Event listener para el span editable
    const servingsDisplay = document.getElementById('servingsDisplay');
    
    // Cuando presiona Enter
    servingsDisplay.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            servingsDisplay.blur(); // Quita el foco para disparar el evento blur
        }
    });
    
    // Cuando sale del span (blur)
    servingsDisplay.addEventListener('blur', () => {
        const text = servingsDisplay.textContent.replace('🍽️', '').trim();
        const newServings = parseInt(text);
        
        // Validar que sea un número válido
        if (!isNaN(newServings) && newServings >= 1 && newServings < 16) {
            updateServings(recipe.id, newServings);
        } else {
            // Si no es válido, restaurar el valor anterior
            servingsDisplay.textContent = '🍽️' + currentServings;
        }
    });
    
    // Seleccionar solo el número cuando se hace clic (sin el emoji)
    servingsDisplay.addEventListener('focus', () => {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(servingsDisplay);
        selection.removeAllRanges();
        selection.addRange(range);
    });
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