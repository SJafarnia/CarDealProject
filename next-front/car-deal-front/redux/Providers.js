import { Provider } from 'react-redux';
import store from "./store";


function Providers({ Children }) {
    return (
        <Provider store={store}>
            {Children}
        </Provider>
    )
}

export default Providers
