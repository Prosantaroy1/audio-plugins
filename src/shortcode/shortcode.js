import './shortcode.scss';



window.copyBPlAdminShortcode = id => {
    var input = document.querySelector('#bPlAdminShortcode-' + id + ' input'); // DOM থেকে একটা input ফিল্ড খোঁজা হচ্ছে।
    var tooltip = document.querySelector('#bPlAdminShortcode-' + id + ' .tooltip'); //DOM থেকে একটা tooltip ফিল্ড খোঁজা 
    input.select();   ///input select 
    input.setSelectionRange(0, 30);  //30 word select
    document.execCommand('copy');  //api copy
    tooltip.innerHTML = wp.i18n.__('Copied Successfully!', 'advanced-post-block'); //text change
    setTimeout(() => {
        tooltip.innerHTML = wp.i18n.__('Copy To Clipboard', 'advanced-post-block');
    }, 1500);
}