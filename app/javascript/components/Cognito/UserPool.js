import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: 'us-east-2_Da69i358x',
    ClientId: '4vtp2186e00ibl8ujari51scl2'
}

const UserPool = new CognitoUserPool(poolData)

export default UserPool