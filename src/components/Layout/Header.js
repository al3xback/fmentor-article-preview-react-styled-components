import styled from 'styled-components';

const HeaderShell = styled.header``;

const Header = () => {
	return (
		<HeaderShell>
			<h1 className="sr-only">Article preview component</h1>
		</HeaderShell>
	);
};

export default Header;
