import fetch from 'isomorphic-fetch';

export const HANDLE_DATE = 'HANDLE_DATE';

export default class Actions {

    handleChangeDate = (date) => {
        return {
            type: HANDLE_DATE,
            payload: date
        };
    };

}
