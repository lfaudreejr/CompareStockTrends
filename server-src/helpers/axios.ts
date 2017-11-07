import * as axios from 'axios';

const axi: any = axios;

function axiosMethod(method: string) {
	return function ax(url: string) {
		return axi[method](url);
	};
}

export default axiosMethod;
