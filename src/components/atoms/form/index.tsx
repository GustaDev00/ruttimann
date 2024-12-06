import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "./constants";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";
import { useState } from "react";
import useAnimation from "./animation";

export const Form = () => {
  const { sectionRef } = useAnimation();
  const { contact } = C;
  const [isModalOpen, setIsModalOpen] = useState({
    isActive: false,
    send: true,
    title: <>Nachricht gesendet</>,
    text: (
      <>
        Ihre Nachricht wurde erfolgreich gesendet. Unser Team <br /> wird Ihnen in Kürze per E-Mail
        antworten.
      </>
    ),
  });
  const [loading, setLoading] = useState(false);

  const closeModal = (send?: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: false,
      send: send ?? true,
    });
  };

  const openModal = (send: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: true,
      send,
      title: send ? (
        <>Nachricht gesendet</>
      ) : (
        <>
          Füllen Sie alle Felder <br />
          korrekt aus
        </>
      ),
    });
  };

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendMail(values);
        openModal(true);
        setLoading(false);

        setTimeout(() => {
          closeModal(true);
        }, 4000);

        formik.resetForm();
      } catch {
        openModal(false);
        setLoading(false);

        setTimeout(() => {
          closeModal(false);
        }, 4000);
      }
    },
  });

  return (
    <>
      <S.Modal $active={isModalOpen.isActive} $error={isModalOpen.send}>
        <S.ModalContent>
          <S.WrapperModal>
            <S.IconModal />
            <S.TitleModal>{isModalOpen.title}</S.TitleModal>
            <S.TextModal>{isModalOpen.text}</S.TextModal>
            <S.ButtonModal onClick={() => closeModal()}>OK</S.ButtonModal>
          </S.WrapperModal>
        </S.ModalContent>
        <S.Blackout onClick={() => closeModal()} data-timeline="blackout" />
      </S.Modal>

      <S.Contact ref={sectionRef} data-timeline="contact">
        <S.Wrapper data-timeline="wrapper">
          <S.Container data-timeline="container">
            <S.Form onSubmit={formik.handleSubmit} data-timeline="form">
              {contact.form.inputs.map((input, index) => (
                <S.Label
                  key={index}
                  $gridName={input.name}
                  $error={Boolean(
                    formik.touched[input.name as keyof SendMailRequest] &&
                      formik.errors[input.name as keyof SendMailRequest],
                  )}
                  data-timeline={`label-${input.name}`}
                >
                  <S.TextInput data-timeline={`text-input-${input.name}`}>
                    {input.label}
                  </S.TextInput>
                  {input.type === "textarea" ? (
                    <S.TextArea
                      {...formik.getFieldProps(input.name)}
                      placeholder={input.placeholder}
                      name={input.name}
                      data-timeline={`textarea-${input.name}`}
                    />
                  ) : (
                    <S.Input
                      {...formik.getFieldProps(input.name)}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                      data-timeline={`input-${input.name}`}
                    />
                  )}
                </S.Label>
              ))}
              <S.Button type="submit" data-timeline="submit-button">
                {contact.form.button} {loading && "..."}
              </S.Button>
            </S.Form>
            {contact.content.map(
              ({ icon: Icon, subtitle, list: { phones, emails, info, location } }, index) => (
                <S.Content key={index} data-timeline={`content-${index}`}>
                  <S.IconContent data-timeline={`icon-content-${index}`}>
                    <Icon />
                  </S.IconContent>
                  <S.SubTitle data-timeline={`subtitle-${index}`}>{subtitle}</S.SubTitle>
                  {phones && (
                    <S.List $line={true} data-timeline={`list-phones-${index}`}>
                      {phones?.map(({ text, content, link }, idx) => (
                        <S.Item key={idx} data-timeline={`list-item-phone-${idx}`}>
                          <S.Link href={link} title={text} data-timeline={`phone-link-${idx}`}>
                            {text}:{" "}
                            <S.Span data-timeline={`phone-content-${idx}`}>{content}</S.Span>
                          </S.Link>
                        </S.Item>
                      ))}
                    </S.List>
                  )}
                  {emails && info && (
                    <S.List data-timeline={`list-emails-${index}`}>
                      <S.Item data-timeline={`email-item-${index}`}>
                        <S.Link
                          href={emails.link}
                          title={emails.text}
                          data-timeline={`email-link-${index}`}
                        >
                          {emails.text}:{" "}
                          <S.Span data-timeline={`email-content-${index}`}>{emails.content}</S.Span>
                        </S.Link>
                      </S.Item>
                      <S.Item data-timeline={`info-text-${index}`}>{info.text}:</S.Item>
                      <S.Item data-timeline={`info-hours-${index}`}>
                        {info.hours.days}:{" "}
                        <S.Span data-timeline={`info-time-${index}`}>{info.hours.time}</S.Span>
                      </S.Item>
                    </S.List>
                  )}
                  {location && (
                    <S.List data-timeline={`list-location-${index}`}>
                      <S.Item data-timeline={`location-item-${index}`}>
                        <S.Link
                          href={location.link}
                          title={location.text}
                          data-timeline={`location-link-${index}`}
                        >
                          <S.Span data-timeline={`location-content-${index}`}>
                            {location.content}
                          </S.Span>
                        </S.Link>
                      </S.Item>
                    </S.List>
                  )}
                </S.Content>
              ),
            )}
          </S.Container>
        </S.Wrapper>
      </S.Contact>
    </>
  );
};
