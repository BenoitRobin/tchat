import { ON_SUBMIT, ON_CHANGE } from '../actions/messageForm';

const initialState = {
  list: [
    {
      id: 1,
      author: 'John Doe',
      content: 'Salut comment ça va ?',
    },
    {
      id: 2,
      author: 'Alice Cooper',
      content: 'Va bien, on fait couler!',
    },
    {
      id: 3,
      author: 'William Yates',
      content: 'Qu\'est-ce que vous racontez?',
    },
    {
      id: 4,
      author: 'Calimero',
      content: 'H\é ! les gars je suis là!!',
    },
    {
      id: 5,
      author: 'John Doe',
      content: '....',
    },
  ],

  messageText: '',
};

const message = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        messageText: action.text,
      };
    case ON_SUBMIT:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: 6,
            author: 'Malcom',
            content: state.messageText,
          },
        ],
        messageText: '',

      };
    default:
      return state;
  }
};

export default message;
