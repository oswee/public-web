import storage from './storage';
import { sagaMiddleware } from './middleware/saga';
import { historyMiddleware, routeMiddleware } from './router';


export default [ 
    storage,
    sagaMiddleware,
    historyMiddleware,
    routeMiddleware,
];