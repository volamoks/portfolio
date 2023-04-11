import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appActions } from '../reducer/reducer';

const allAction = { ...appActions };

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allAction, dispatch);
};
