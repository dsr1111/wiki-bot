# 🔧 슬래시 명령어 권한 설정 가이드

## 🚨 슬래시 명령어가 작동하지 않는 주요 원인

### 1. Bot 권한 부족
Discord Developer Portal에서 다음 권한들이 활성화되어야 합니다:

**Gateway Intents:**
- ✅ **Message Content Intent** (필수!)
- ✅ **Server Members Intent** (선택사항)
- ✅ **Presence Intent** (선택사항)

**Bot Permissions:**
- ✅ **Send Messages**
- ✅ **Embed Links**
- ✅ **Read Message History**
- ✅ **Use Slash Commands** (가장 중요!)

### 2. OAuth2 설정 문제
**Scopes에서 반드시 선택해야 할 것:**
- ✅ **bot**
- ✅ **applications.commands** (슬래시 명령어용)

### 3. 서버 초대 링크 문제
올바른 초대 링크를 사용해야 합니다.

## 🛠️ 해결 방법

### 방법 1: 권한 재설정
1. [Discord Developer Portal](https://discord.com/developers/applications) 접속
2. 해당 애플리케이션 선택
3. **Bot** → **Privileged Gateway Intents** 확인
4. **OAuth2** → **URL Generator**에서 권한 재설정

### 방법 2: 봇 재초대
1. 새로운 OAuth2 URL 생성
2. **Scopes**: `bot`, `applications.commands` 선택
3. **Bot Permissions**: 필요한 권한들 선택
4. 새 초대 링크로 봇 재초대

### 방법 3: 슬래시 명령어 재등록
```bash
npm run deploy
```

## 🔍 디버깅 체크리스트

- [ ] 봇이 서버에 온라인 상태로 표시되는가?
- [ ] 봇에게 "Use Slash Commands" 권한이 있는가?
- [ ] OAuth2 Scopes에 "applications.commands"가 포함되어 있는가?
- [ ] 슬래시 명령어 등록이 성공했는가?
- [ ] 봇이 서버에 제대로 초대되었는가?

## 📱 테스트 방법

1. **기본 명령어 테스트**: `!도움말`
2. **슬래시 명령어 테스트**: `/도움말`
3. **봇 상태 확인**: 봇 이름 옆에 초록색 점 확인
