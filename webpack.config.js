var path = require('path');

module.exports = {  //����commonJS�ĵ����﷨
    entry: './app/index.js', //entry�������ǵ�����ļ��������ж������ļ�,��webpack������������
    output: { //output��Ϊwebpack������������
        filename: './dist/bundle.js',//filenameΪ����ļ���
    },
}