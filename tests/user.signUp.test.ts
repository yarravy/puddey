import { requestUserSignUpV1,
         requestClearV1 } from './helpers'

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

beforeEach(() => requestClearV1());

describe('returns {uId}', () => {
    test('valid args', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                                   VALID_ARGS.username, VALID_ARGS.email, 
                                   VALID_ARGS.password)).toStrictEqual(1);
    });
    test('second user', () => {
        requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                            VALID_ARGS.username, VALID_ARGS.email, 
                            VALID_ARGS.password);
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
               'lCro', 'lcroy@gmail.com', VALID_ARGS.password)).toStrictEqual(2);
    });
})

describe('invalid names', () => {
    test('first name empty', () => {
        expect(requestUserSignUpV1('', VALID_ARGS.lastName, VALID_ARGS.username,
                                   VALID_ARGS.email,
                                   VALID_ARGS.password)).toStrictEqual(400);
    });
    test('last name empty', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, '',
                                   VALID_ARGS.username, VALID_ARGS.email, 
                                   VALID_ARGS.password)).toStrictEqual(400);
    });
})

describe('invalid email', () => {
    test('no @', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, '',
                                   VALID_ARGS.username, 'invalidgmail.com', 
                                   VALID_ARGS.password)).toStrictEqual(400);
    });
    test('email empty', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                                   VALID_ARGS.username, '', 
                                   VALID_ARGS.password)).toStrictEqual(400);
    });
    test('email email taken', () => {
        requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                            VALID_ARGS.username, VALID_ARGS.email, 
                            VALID_ARGS.password);
        expect(requestUserSignUpV1(VALID_ARGS_2.firstName, VALID_ARGS_2.lastName,
                                    VALID_ARGS_2.username, VALID_ARGS.email, 
                                    VALID_ARGS_2.password)).toStrictEqual(400);
    });
})

describe('invalid password', () => {
    test('password length < 8', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                                   VALID_ARGS.username, VALID_ARGS.email, 
                                   'Type123')).toStrictEqual(400);
    });
    test('no numbers included', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                                   VALID_ARGS.username, VALID_ARGS.email, 
                                   'TypeHere')).toStrictEqual(400);
});
    test('no capslock', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                                   VALID_ARGS.username, VALID_ARGS.email, 
                                   'typehere1')).toStrictEqual(400);
});
    test('no lowercase', () => {
        expect(requestUserSignUpV1(VALID_ARGS.firstName, VALID_ARGS.lastName,
                                   VALID_ARGS.username, VALID_ARGS.email, 
                                   'TYPEHERE1')).toStrictEqual(400);
});
})