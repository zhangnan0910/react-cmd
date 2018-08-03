1. call(test,params) test(params)
2. put(action)
3. watcher-saga:takeevery(actionType,work-saga)

### saga是一个generator函数

    import {call,put,takeEvery} fromm 'redux-saga'