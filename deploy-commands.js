require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: '디지몬',
    description: '디지몬의 전체 정보를 보여줍니다',
    options: [
      {
        name: '이름',
        description: '검색할 디지몬의 이름',
        type: 3, // STRING
        required: true
      }
    ]
  },
  {
    name: '약점',
    description: '디지몬의 약점을 보여줍니다',
    options: [
      {
        name: '이름',
        description: '검색할 디지몬의 이름',
        type: 3, // STRING
        required: true
      }
    ]
  },
  {
    name: '강점',
    description: '디지몬의 강점을 보여줍니다',
    options: [
      {
        name: '이름',
        description: '검색할 디지몬의 이름',
        type: 3, // STRING
        required: true
      }
    ]
  },
  {
    name: '스탯',
    description: '디지몬의 스탯을 보여줍니다',
    options: [
      {
        name: '이름',
        description: '검색할 디지몬의 이름',
        type: 3, // STRING
        required: true
      }
    ]
  },
  {
    name: '도움말',
    description: '사용 가능한 명령어를 보여줍니다'
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('슬래시 명령어를 등록하는 중...');

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands },
    );

    console.log('슬래시 명령어 등록 완료!');
  } catch (error) {
    console.error(error);
  }
})();
