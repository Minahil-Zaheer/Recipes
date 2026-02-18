// Recipe Detail Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Get recipe ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('recipe');
    
    if (!recipeId || !recipesData[recipeId]) {
        // If recipe not found, redirect to home page
        window.location.href = 'index.html';
        return;
    }
    
    // Load the recipe data
    const recipe = recipesData[recipeId];
    
    // Update page title
    document.title = `${recipe.title} - World Famous Recipes`;
    
    // Populate recipe details
    populateRecipeDetails(recipe);
});

function populateRecipeDetails(recipe) {
    // Recipe title
    document.getElementById('recipe-title').textContent = recipe.title;
    
    // Recipe image
    const mainImage = document.getElementById('recipe-main-image');
    mainImage.src = recipe.image;
    mainImage.alt = recipe.title;
    
    // Overview information
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('cook-time').textContent = recipe.cookTime;
    document.getElementById('servings').textContent = recipe.servings;
    document.getElementById('difficulty').textContent = recipe.difficulty;
    
    // Ingredients list
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Instructions list
    const instructionsList = document.getElementById('instructions-list');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    // Time breakdown table
    const timeTableBody = document.querySelector('#time-table tbody');
    timeTableBody.innerHTML = '';
    recipe.timeBreakdown.forEach(([stage, time]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${stage}</strong></td>
            <td>${time}</td>
        `;
        // Highlight total time row
        if (stage === 'Total Time') {
            tr.style.fontWeight = 'bold';
            tr.style.backgroundColor = '#fff3cd';
        }
        timeTableBody.appendChild(tr);
    });
    
    // Nutrition table
    const nutritionTableBody = document.querySelector('#nutrition-table tbody');
    nutritionTableBody.innerHTML = '';
    recipe.nutrition.forEach(([nutrient, amount]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${nutrient}</strong></td>
            <td>${amount}</td>
        `;
        nutritionTableBody.appendChild(tr);
    });
    
    // Tips list
    const tipsList = document.getElementById('tips-list');
    tipsList.innerHTML = '';
    recipe.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

// Mobile Menu Toggle (same as main.js)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Print recipe function (optional enhancement)
function printRecipe() {
    window.print();
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add fade-in animation when page loads
window.addEventListener('load', () => {
    document.querySelector('.recipe-detail').style.opacity = '0';
    document.querySelector('.recipe-detail').style.animation = 'fadeIn 0.6s ease forwards';
});
