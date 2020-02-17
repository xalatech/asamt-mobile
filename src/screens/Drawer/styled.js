import styled from 'styled-components';
import { fontWeight } from '@components/core/styled';

export const Drawer = styled.View`
  background-color: white;
  flex: 1;
  justify-content: space-between;
`;

export const DrawerText = styled.Text`
  text-align: center;
  color: black;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  height: 50px;
`;

export const ProfileWrapper = styled.View`
  background-color: ${({ theme }) => theme.systemColor};
  padding-top: 20px;
  height: 100px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const AvatarWrapper = styled.View`
  border-radius: 50px;
  height: 60px;
  width: 60px;
  margin: auto 16px;
  justify-content: center;
  background-color: ${({ theme }) => theme.liteOrange};
  align-items: center;
  overflow: hidden;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const AvatarText = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryOrange};
`;

export const UserName = styled.Text`
  text-align: center;
  font-size: 16px;
  ${fontWeight(400)}
  color: ${({ theme }) => theme.white};
`;

export const ItemsWrapper = styled.View`
  margin-top: 15px;
  width: 90%;
  margin-left: auto;
 
`;

export const DrawerTop = styled.View`

`;
