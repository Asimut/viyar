function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6N7wx80UMM2":
        Script1();
        break;
      case "5tUakOckfBS":
        Script2();
        break;
      case "66JsvBNe8Tg":
        Script3();
        break;
      case "6n57K3COsnn":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6QzRSfFjTkF');
const duration = 750;
const easing = 'linear';
const id = '5bcYXvmaESQ';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('630a2sn6U9C');
const duration = 750;
const easing = 'ease-out';
const id = '6kUkOFdbVd0';
const shakeAmount = 2;
const delay = 20000;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('630a2sn6U9C');
const duration = 750;
const easing = 'ease-out';
const id = '6kUkOFdbVd0';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
