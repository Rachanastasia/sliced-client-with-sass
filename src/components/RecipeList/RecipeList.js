import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeThumbnails from './RecipeThumbnails'
import UserContext from '../../user-context'

import { VscAdd } from 'react-icons/vsc'


class RecipeList extends Component {

    static contextType = UserContext;
    //default props for recipe array

    render() {

        const recipeList = !this.context.recipes
            ? <h2>There are no recipes</h2>
            : <RecipeThumbnails user={this.context.user_id} recipes={this.context.recipes} />
        return (
            <section className='recipe_list'>


                <Link to='/add-recipe' tabIndex='-1'>
                    <button className='add_recipe round' aria-label="Add New Recipe">
                        <VscAdd className='plus round-child' />
                    </button>
                </Link>

                {recipeList}
            </section>
        )
    }
}

export default RecipeList
