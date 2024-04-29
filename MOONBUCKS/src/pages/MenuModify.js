import { Navigate } from 'react-router-dom';
import MenuModifyForm from '../components/form/MenuModifyForm';

function MenuModify() {

	/* 로그인 상태가 아닌데 호출할 경우 메인으로 */
	// const isAuthorized = !!localStorage.getItem('isLogin');

	/* 관리자 로그인 상태 확인 */
	const isAdmin = !!localStorage.getItem('isAdmin');

	if (!isAdmin) {
		return <Navigate to="/login" replace={true} />
	}

	return (
		<>
			<h1>메뉴 수정 페이지</h1>
			<MenuModifyForm />
		</>
	);
}

export default MenuModify;