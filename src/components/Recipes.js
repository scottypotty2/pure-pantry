import React, { useState } from 'react';

const Recipes = () => {
  const [activeRecipe, setActiveRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: 'Classic Sourdough Bread',
      emoji: '🍞',
      difficulty: 'Advanced',
      time: '24 hours',
      description: 'Traditional sourdough bread with a crispy crust and tangy flavor',
      ingredients: [
        '1 cup active sourdough starter',
        '3 cups bread flour',
        '1 1/2 cups warm water',
        '1 1/2 tsp salt',
        '1 tbsp olive oil'
      ],
      instructions: [
        'Mix starter with warm water in a large bowl',
        'Add flour and salt, mix until a shaggy dough forms',
        'Cover and let rest for 30 minutes',
        'Perform stretch and folds every 30 minutes for 2 hours',
        'Let rise at room temperature for 8-12 hours',
        'Shape into a round loaf and place in a floured banneton',
        'Refrigerate overnight (8-12 hours)',
        'Preheat oven to 450°F with a Dutch oven inside',
        'Score the bread and bake covered for 20 minutes',
        'Remove lid and bake for another 20-25 minutes until golden'
      ],
      tips: 'The key to good sourdough is patience and a healthy starter. Feed your starter regularly and keep it at room temperature for best results.'
    },
    {
      id: 2,
      title: 'Cinnamon Raisin Bread',
      emoji: '🍞',
      difficulty: 'Intermediate',
      time: '3 hours',
      description: 'Sweet and aromatic bread perfect for breakfast or afternoon tea',
      ingredients: [
        '3 cups bread flour',
        '1/4 cup warm water',
        '1/4 cup warm milk',
        '2 1/4 tsp active dry yeast',
        '1/4 cup sugar',
        '1/4 cup butter, softened',
        '1 egg',
        '1 tsp salt',
        '1 cup raisins',
        '2 tbsp cinnamon',
        '2 tbsp brown sugar'
      ],
      instructions: [
        'Dissolve yeast in warm water and let stand for 5 minutes',
        'Mix flour, sugar, salt, and butter in a large bowl',
        'Add yeast mixture, milk, and egg, mix until dough forms',
        'Knead for 8-10 minutes until smooth and elastic',
        'Place in greased bowl, cover, and let rise for 1 hour',
        'Roll out dough and sprinkle with cinnamon, brown sugar, and raisins',
        'Roll up tightly and place in greased loaf pan',
        'Let rise for 45 minutes',
        'Bake at 350°F for 30-35 minutes until golden brown'
      ],
      tips: 'Soak raisins in warm water for 30 minutes before adding to prevent them from drying out the bread.'
    },
    {
      id: 3,
      title: 'Chocolate Chip Cookies',
      emoji: '🍪',
      difficulty: 'Easy',
      time: '1 hour',
      description: 'Classic chocolate chip cookies with browned butter for extra flavor',
      ingredients: [
        '2 1/4 cups all-purpose flour',
        '1 tsp baking soda',
        '1 tsp salt',
        '1 cup butter, browned and cooled',
        '3/4 cup granulated sugar',
        '3/4 cup brown sugar',
        '2 eggs',
        '2 tsp vanilla extract',
        '2 cups chocolate chips'
      ],
      instructions: [
        'Brown butter in a saucepan over medium heat until golden brown',
        'Let butter cool completely',
        'Cream butter and sugars until light and fluffy',
        'Add eggs and vanilla, mix well',
        'Mix in flour, baking soda, and salt',
        'Fold in chocolate chips',
        'Chill dough for 30 minutes',
        'Drop rounded tablespoons onto baking sheet',
        'Bake at 375°F for 10-12 minutes until edges are golden'
      ],
      tips: 'Browning the butter adds a nutty, caramel flavor that makes these cookies extra special. Don\'t skip the chilling step!'
    },
    {
      id: 4,
      title: 'Everything Bagel Spice',
      emoji: '🧂',
      difficulty: 'Easy',
      time: '10 minutes',
      description: 'Homemade everything bagel seasoning for breads and crackers',
      ingredients: [
        '2 tbsp poppy seeds',
        '2 tbsp sesame seeds',
        '2 tbsp dried minced garlic',
        '2 tbsp dried minced onion',
        '1 tbsp coarse salt',
        '1 tbsp black sesame seeds (optional)'
      ],
      instructions: [
        'Mix all ingredients in a small bowl',
        'Store in an airtight container',
        'Sprinkle on breads before baking',
        'Use as a topping for crackers or bagels'
      ],
      tips: 'This seasoning adds amazing flavor to any bread. Try it on sourdough, dinner rolls, or even pizza crust!'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-cottage-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-handwriting font-bold text-warm-brown mb-4">
            Grandma's Recipes
          </h2>
          <p className="text-xl font-serif text-gray-600 max-w-3xl mx-auto">
            Traditional recipes passed down through generations. 
            These are the same recipes I use in my kitchen every day.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => setActiveRecipe(recipe)}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{recipe.emoji}</div>
                <h3 className="text-xl font-serif font-bold text-warm-brown mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 font-serif mb-4">
                  {recipe.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Difficulty: {recipe.difficulty}</span>
                  <span>Time: {recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recipe Modal */}
        {activeRecipe && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" onClick={() => setActiveRecipe(null)}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-6 py-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{activeRecipe.emoji}</span>
                      <div>
                        <h3 className="text-2xl font-handwriting font-bold text-warm-brown">
                          {activeRecipe.title}
                        </h3>
                        <p className="text-gray-600 font-serif">{activeRecipe.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveRecipe(null)}
                      className="text-gray-400 hover:text-warm-brown transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Ingredients */}
                    <div>
                      <h4 className="text-lg font-serif font-bold text-warm-brown mb-4">Ingredients</h4>
                      <ul className="space-y-2">
                        {activeRecipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-sage-green mt-1">•</span>
                            <span className="text-gray-700 font-serif">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h4 className="text-lg font-serif font-bold text-warm-brown mb-4">Instructions</h4>
                      <ol className="space-y-3">
                        {activeRecipe.instructions.map((instruction, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span className="bg-warm-brown text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-700 font-serif">{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="mt-8 bg-cottage-cream rounded-lg p-4">
                    <h4 className="text-lg font-serif font-bold text-warm-brown mb-2">Grandma's Tip</h4>
                    <p className="text-gray-700 font-serif italic">{activeRecipe.tips}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Baking Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-handwriting font-bold text-warm-brown mb-6 text-center">
            Baking Tips from Grandma
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-4">Essential Tips</h4>
              <ul className="space-y-3 text-gray-700 font-serif">
                <li>• Always use room temperature ingredients for better mixing</li>
                <li>• Don't over-knead bread dough - it should be smooth, not tough</li>
                <li>• Let bread cool completely before slicing</li>
                <li>• Store bread in a paper bag, not plastic</li>
                <li>• Use a kitchen scale for precise measurements</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-warm-brown mb-4">Common Mistakes</h4>
              <ul className="space-y-3 text-gray-700 font-serif">
                <li>• Adding too much flour - dough should be slightly sticky</li>
                <li>• Not letting dough rise long enough</li>
                <li>• Opening the oven door too early</li>
                <li>• Using expired yeast</li>
                <li>• Rushing the process - baking takes time!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes; 