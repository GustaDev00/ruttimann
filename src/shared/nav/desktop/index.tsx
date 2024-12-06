import * as S from "../styles";
import C from "@/constants";
import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();
  const {
    navigation,
    contact: { mails },
  } = C.shared;

  return (
    <>
      <S.Header>
        <S.Logo />

        <S.Nav>
          <S.List>
            {navigation.map((category) => (
              <S.Item key={category.title} $active={pathname === category.href}>
                <S.Link href={category.href}>{category.title}</S.Link>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>

        <S.Mail href={mails.link}>{mails.content}</S.Mail>
      </S.Header>
    </>
  );
};
