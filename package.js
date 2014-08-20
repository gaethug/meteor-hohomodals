/**
 * Created with JetBrains PhpStorm.
 * User: hoho
 * Date: 2014. 8. 20.
 * Time: 오전 9:52
 * To change this template use File | Settings | File Templates.
 */
Package.describe({
  summary: "젠장 영작 못하겠어ㅠ. 이 패키지는 meteor에서 bootstrap modal을 보다 유용하게 사용하도록 해줍니다."
});

Package.on_use(function (api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.add_files(['hohomodals.js', 'hohomodals.css', 'modal_base.html', 'modal_base.js'], 'client');

  if (api.export)
    api.export('HoHoModals');
});