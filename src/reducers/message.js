import { } from '../actions';

const initialState = {
  list: [
    {
      id: 1,
      author: 'Benoit Robin',
      content: 'Salut comment ça va ?',
    },
    {
      id: 2,
      author: 'Elon Musk',
      content: 'Va bien, on fait couler!',
    },
    {
      id: 3,
      author: 'Steve Jobs',
      content: 'Qu\'est-ce tu racontes?',
    },
    {
      id: 4,
      author: 'Steve Wozniak',
      content: 'H\é ! les gars je suis là!!',
    },
    {
      id: 5,
      author: 'Benoit Robin',
      content: '....',
    },
  ],

  messageText: 'Salut je commence à écr',
};

const message = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default message;
