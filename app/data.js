function component () {
  var element = document.createElement('div');

  /* ��Ҫ���� lodash����һ�в����������� */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());