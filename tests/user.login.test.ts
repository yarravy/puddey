import { requestClearV1,
    requestUserLoginV1,
    requestUserSignUpV1 } from './helpers'

beforeEach(() => requestClearV1());


const VALID_ARGS = {
firstName: 'Lainey',
lastName: 'Croydon',
username: 'LCroy',
email: 'lcroydon123@gmail.com',
password: 'lCroy2000'
}

const VALID_ARGS_2 = {
firstName: 'Lain',
lastName: 'Croy',
username: 'kk',
email: 'lcroydon1@gmail.com',
password: 'lCroy2000'
}

describe('valid login args', () => {
test('valid login args', () => {
   requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                       VALID_ARGS.username, VALID_ARGS.email, 
                       VALID_ARGS.password);
   expect(requestUserLoginV1(VALID_ARGS.username, 
                             VALID_ARGS.password)).toStrictEqual({
       token: expect.any(String)
   })
});
test('valid login args with multiple users in databse', () => {
   requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                       VALID_ARGS.username, VALID_ARGS.email, 
                       VALID_ARGS.password);
   requestUserSignUpV1(VALID_ARGS_2.firstName, VALID_ARGS_2.lastName,
                       VALID_ARGS_2.username, VALID_ARGS_2.email, 
                       VALID_ARGS_2.password);
   expect(requestUserLoginV1(VALID_ARGS_2.username, 
                             VALID_ARGS_2.password)).toStrictEqual({
       token: expect.any(String)
   })
});
});

describe('invalid login args', () => {
test('incorrect username', () => {
   requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                       VALID_ARGS.username, VALID_ARGS.email, 
                       VALID_ARGS.password);
   expect(requestUserLoginV1('invalidUsername', 
                             VALID_ARGS.password)).toStrictEqual(400);
});
test('incorrect password', () => {
   requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                       VALID_ARGS.username, VALID_ARGS.email, 
                       VALID_ARGS.password);
   expect(requestUserLoginV1(VALID_ARGS.username, 
                             '123')).toStrictEqual(400);
});
});
