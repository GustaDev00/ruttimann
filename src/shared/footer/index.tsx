import * as S from "./styles";
import C from "@/constants";

export const Footer = () => {
  const {
    navigation,
    social_share,
    contact: { phones, mails, location },
    footer,
  } = C.shared;
  return (
    <>
      <S.Footer>
        <S.Wrapper>
          <S.Cta>
            <S.ContentCta>
              <S.Title>Es beginnt mit einer Idee</S.Title>
              <S.Text>Wir sind bereit loszulegen - und Sie?</S.Text>
            </S.ContentCta>
            <S.Button href="/kontakt" title="Jetzt Kontakt aufnehmen" />
          </S.Cta>
        </S.Wrapper>
        <S.Wrapper>
          <S.Column $first={true}>
            <S.Logo />
            <S.Line>
              <S.List>
                <S.Item>
                  <S.Link href={mails.link} target="_blank">
                    {mails.text}: {mails.content}
                  </S.Link>
                </S.Item>

                <S.Item>
                  <S.Link href={location.link} target="_blank">
                    {location.content}
                  </S.Link>
                </S.Item>
              </S.List>
            </S.Line>

            <S.SocialShare>
              {social_share.map(({ link, icon: Icon, title }) => (
                <S.Link href={link} title={title} key={title}>
                  <Icon />
                </S.Link>
              ))}
            </S.SocialShare>
          </S.Column>
          <S.Column>
            <S.TitleLine>Navigation</S.TitleLine>
            <S.List>
              {navigation.map((link) => (
                <S.Item key={link.title}>
                  <S.Link href={link.href}>{link.title}</S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Column>
          <S.Column>
            <S.TitleLine>Kontakt</S.TitleLine>

            <S.List>
              {phones.map(({ link, text, content }, index) => (
                <S.Item key={index}>
                  <S.Link href={link}>
                    {text}: {content}
                  </S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Column>
        </S.Wrapper>
        <S.Info>
          <S.Copy>{footer.copyrigth.text}</S.Copy>
          <S.Agency>{footer.copyrigth.fiber}</S.Agency>
        </S.Info>
      </S.Footer>
    </>
  );
};
