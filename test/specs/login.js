describe('Login',() =>{

    it('LoginExample',async ()=> {

        
        const filePath="/Users/hakantektas/appiumQAStaj/test/specs/screenshot";
        const date=new Date();
        let el1 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/username_txt");
        await el1.setValue("TESTUSER");
        let el2 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/password_txt");
        await el2.setValue("123456");
        await el2.click();
        browser.saveScreenshot(filePath+"/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getDay()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds()+".png")
        await driver.back();
        let el3 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/login_btn");
        await el3.click();
        browser.saveScreenshot(filePath+"/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getDay()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds()+".png")
        let el4 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/balance_txt");
        await el4.click();
        browser.saveScreenshot(filePath+"/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getDay()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds()+".png")
        let el5 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/transfer_layout");
        await el5.click();
        browser.saveScreenshot(filePath+"/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getDay()+date.getHours()+date.getMinutes()+date.getSeconds()+date.getMilliseconds()+".png")
        let el6 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/transfer_to");
        await el6.setValue("TR3423432423432432432432");
        let el7 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/account_num_ed");
        await el7.setValue("TR3423432423432432432432");
        let el8 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/money_ed");
        await el8.setValue("1500");
        let el9 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/transfer_button");
        await el9.click();
        let el10 = await driver.$("id:android:id/message");
        await el10.click();
        let el11 = await driver.$("id:app.com.sandjs.bankaccountfakewallet:id/balance_txt");
        await el11.click();

    })
    
})