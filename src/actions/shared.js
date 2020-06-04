import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_USER = 'tylermcginnis'

export function receiveInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_USER))
            })
    }
}