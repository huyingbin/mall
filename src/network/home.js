import { requests } from './request.js'
export function homeMultidata() {
    return requests({ url: '/home/multidata' });
}