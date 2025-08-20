# 🦖 디지몬 디스코드 봇

디스코드에서 디지몬 정보를 검색할 수 있는 봇입니다.

## 🚀 기능

- **전체 정보**: `!디지몬 [이름]` - 디지몬의 모든 정보를 보여줍니다
- **약점 검색**: `!약점 [이름]` - 디지몬의 약점을 보여줍니다
- **강점 검색**: `!강점 [이름]` - 디지몬의 강점을 보여줍니다
- **스탯 검색**: `!스탯 [이름]` - 디지몬의 스탯을 보여줍니다
- **도움말**: `!도움말` - 사용 가능한 명령어를 보여줍니다

## 📋 지원하는 정보

- 진화 단계
- 타입
- 레벨
- HP, SP, STR, INT, DEF, RES, SPD
- 강점과 약점
- 필드
- 스킬 정보

## 🛠️ 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 입력하세요:
```env
DISCORD_TOKEN=your_discord_bot_token_here
CLIENT_ID=your_client_id_here
DIGIMON_DATA_URL=https://media.dsrwiki.com/data/csv/digimon.json
```

### 3. 봇 실행
```bash
# 개발 모드 (자동 재시작)
npm run dev

# 프로덕션 모드
npm start
```

## 🔧 디스코드 봇 설정

1. [Discord Developer Portal](https://discord.com/developers/applications)에서 새 애플리케이션 생성
2. Bot 섹션에서 봇 생성
3. 필요한 권한 설정:
   - Send Messages
   - Embed Links
   - Read Message History
4. 봇을 서버에 초대
5. 토큰을 `.env` 파일에 입력

## 📝 사용 예시

```
!디지몬 가지몬
!약점 가지몬
!강점 가지몬
!스탯 가지몬
!도움말
```

## 🌟 특징

- 실시간 디지몬 데이터 로드
- 한국어/영어 명령어 지원
- 아름다운 임베드 형태로 정보 표시
- 부분 일치 검색 지원
- 자동 제안 기능

## �� 라이선스

MIT License
