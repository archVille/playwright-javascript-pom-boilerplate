import { test } from '@playwright/test';
import {LoginPage} from '../tests/login'

test('Login page test', async ({ page }) => {

  const  Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('Admin', 'admin123' )

});