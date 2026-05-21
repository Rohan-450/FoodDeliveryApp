const linking = {
  prefixes: ['foodapp://'],

  config: {
    screens: {
      MainTabs: {
        screens: {
          HomeTab: {
            screens: {
              RestaurantDetails: 'restaurant/:id',
            },
          },
        },
      },
    },
  },
};

export default linking;