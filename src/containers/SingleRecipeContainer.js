import React from 'react';

export default class SingleRecipeContainer extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        loading: true
      };
    }

    componentWillMount() {
      const store = this.props.store.getRecipeStore();
      store.retrieveSelectedDetails(this.props.params.id)
        .then((response) => {
          this.state.loading = false;
          this.state.data = response.data.recipe.ingredients;
        });
    }

    render() {
      return (
        <div>
          {this.state.loading
            ? <div>Loading</div>
            : <div>{this.state.data[0]}</div>
          }
        </div>
      )
    }
}
