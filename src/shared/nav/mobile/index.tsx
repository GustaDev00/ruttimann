import * as S from "../styles";
import C from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const {
    navigation,
    contact: { mails },
  } = C.shared;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <S.Header>
        <S.Logo />

        <S.Button onClick={handleClick}>
          <S.MenuLine />
          <S.MenuLine />
          <S.MenuLine />
        </S.Button>
      </S.Header>

      <S.Overlay $open={open}>
        <S.Modal>
          <S.Wrapper>
            <S.HeaderModal>
              <S.TextModal>Menu</S.TextModal>
              <S.Close onClick={handleClick} />
            </S.HeaderModal>
            <S.Container>
              <S.List>
                {navigation.map((link, index) => (
                  <S.Item key={index} $active={pathname === link.href}>
                    <S.Link {...link} onClick={handleClick}>
                      {link.title}
                    </S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Container>
            <S.Line />
            <S.Footer>
              <S.LinkFooter href={mails.link}>{mails.content}</S.LinkFooter>
              <S.ButtonFooter href="/kontakt" title="kontakt" />
            </S.Footer>
          </S.Wrapper>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </>
  );
};
