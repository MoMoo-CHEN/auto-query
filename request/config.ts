import {ContentType} from './encode'
import {Headers} from 'node-fetch'

export const link = {
    ssoUrl: 'https://jwglxt.nmukd.edu.cn/jwglxt/xtgl/login_slogin.html'
}

export const fakeHeaders = (options?: {
    origin?: string, referer?: string, type?: string, length?: number, cookie?: string
}) => {
    return {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Content-Type': options?.type ?? ContentType.query,
        // 'content-length': options?.length ?? 0,
        origin: options?.origin ?? 'https://jwglxt.nmukd.edu.cn',
        referer: options?.referer ?? 'http://authserver.nmukd.edu.cn/authserver/login',
        cookie: options?.cookie ?? '',
    }
}
