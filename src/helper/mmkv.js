import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
    id: 'user-storage',
    // path: '/users/storage',
    encryptionKey: 'EncrypTedKey123'
});

