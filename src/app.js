const skidrow = require('./core/skidrow');
const igg = require('./core/igg');
const game3rb = require('./core/game3rb');

(async () => {
    /* let links = await skidrow.getTop10Links();
    let gamesInfo = []
    for (let index = 0; index < links.length; index++) {
        let data = await skidrow.getDataByUrl(links[index]);
        let info = await skidrow.convertDataToInfo(data);
        gamesInfo.push(info)
        console.log(info)
    }
    console.log(gamesInfo) */
    /* let a = await skidrow.getDataByUrl('https://skidrowgamereloaded.co/17-factorio-game.html')
    console.log(a) */
    let data = [ 'Title: Download Satisfactory v0.3.0.1 build 114399 + Online',
    '',
    'Release name: Satisfactory\nSize: 7.06 GB',
    'Title: Satisfactory\nGenre: Action\nDeveloper: Epic Store\nPublisher: Epic Store\nRelease Date: 2019',
    '',
    'Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Pioneering for FICSIT Incorporated means charting and exploiting an alien planet, battling alien lifeforms, creating multi-story factories, entering conveyor belt heaven, automating vehicles, and researching new technologies.',
    'MINIMUM:',
    'CPU: i5-3570k 3,4 GHz 4 Core.\nOS: Windows 7 or later (64-Bit)\nVIDEO CARD: GTX 660 2GB.\nFREE DISK SPACE: 20 GB.\nDEDICATED VIDEO RAM: 2048 MB.',
    '1) Download the game using a Torrent program or Direct program\n2) After downloading the game, go to the downloaded game folder\n3) Extract the files with WinRar or 7-Zip\n4) Now start the installation with ” Setup.exe “, choose the directory to install\n5) Wait until the installation is complete\n6) Now just start the game as an administrator with the shortcut that was created on the desktop\n7) Play!',
    '1) Download Satisfactory_Fix_Repair_Epic\n2) Copy the content of this crack to your game folder\n3) Start Epic Store and login with your account (Download EPIC GAMES HERE)\n4) Run the game through the shortcut Satisfactory or EpicLauncher.exe , which is located in the folder with the game.\n5) In-game -> Connection : Join Game -> Connecting to a friend -> Playing!\nCreating a server : New Game -> Set up everything as you wish (set theSession Type to Friends Only) and clickStart Game-> Waiting for other players to connect -> Playing!\n6) Play & Enjoy !',
    'Interface language: English,Russian',
    '– Block the game’s exe in your firewall to prevent the game from\ntrying to go online ..\n– If you install games to your systemdrive, it may be necessary\nto run this game with admin privileges instead\n– Support the software developers and buy this game\nhttps://www.epicgames.com/store/en-US/product/satisfactory/home',
    '\n\t\t\t\t\t\t\tابرئ نفسي ، أمام الله و أمام جميع الزوار و الأعضاء ، على المقاطع التي تنشر في الموقع من مقطورات و مقاطع مخلة وسط  الألعاب و أنص على حذف الموسيقى في أي لعبة تم تحميلها من الموقع بالدخول إلى الإعدادات و خفض صوت الموسيقى نفس الشيئ بالنسبة للمقطورات  التي بها موسيقى . اللهم إني بلغت.\t\t\t\t\t\t' ]
    let links = await game3rb.getTop10Links();
    console.log(links)
    for (let index = 0; index < links.length; index++) {
        let data = await game3rb.getDataByUrl(links[index])
        console.log(data)
        let filteredData = await game3rb.filterData(data);
        console.log(object)
        let object = await game3rb.convertDataToInfo(filteredData);
        console.log(object)
    }
    /* let info = await igg.convertDataToInfo(data);
    console.log(info) */
})()