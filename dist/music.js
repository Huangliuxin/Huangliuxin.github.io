const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '����ľ�',
        artist: '�ܻ���',
        url: 'http://www.ytmp3.cn/down/47796.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/17.jpg',
      },
      {
        name: '������',
        artist: '������',
        url: 'http://www.ytmp3.cn/down/49110.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/52.jpg',
      }
    ]
});