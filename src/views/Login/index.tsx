import { Fragment, useState } from "react";
import { COMPONENT_IMG, LOGO } from "../../assets";
import { Button, Input } from "../../components";
import { MdOutlineAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import * as S from "./styles";
import { COLORS } from "../../theme";
import { ToastContainer, toast } from "react-toastify";

const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email("Informe um endereço de e-mail válido!")
      .required("Campo E-mail não informado!"),
    password: yup.string().required("Campo Senha não informado!"),
  })
  .required();

type FormData = yup.InferType<typeof schemaLogin>;

export const Login = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit = (data: FormData) => {
    try {
      toast.success(`Usuário ${data.email} autenticado com sucesso!`);
    } catch (error) {
      toast.error("Não foi possivel concluir a ação no momento");
    }
  };

  return (
    <Fragment>
      <S.Container>
        <S.LoginContent>
          <S.Transparent>
            <S.LogoContent>
              <S.Logo src={LOGO.Logo} />
            </S.LogoContent>
            <S.FormContent>
              <S.Form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <S.FormTitle>Entrar</S.FormTitle>

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        required
                        leftIcon={<MdOutlineAlternateEmail />}
                        label="E-mail"
                        type="email"
                        placeholder="Infrome o seu e-mail de acesso"
                        error={errors.email?.message}
                        {...field}
                      />
                    );
                  }}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        required
                        leftIcon={<MdOutlinePassword />}
                        rightIcon={
                          showPass ? (
                            <AiOutlineEye
                              onClick={() => setShowPass(false)}
                              className="pointer"
                            />
                          ) : (
                            <AiOutlineEyeInvisible
                              onClick={() => setShowPass(true)}
                              className="pointer"
                            />
                          )
                        }
                        label="Senha"
                        type={showPass ? "text" : "password"}
                        placeholder="Infrome a sua senha de acesso"
                        error={errors.password?.message}
                        {...field}
                      />
                    );
                  }}
                />

                <Button
                  title="Entrar"
                  w="100%"
                  h="45px"
                  margin="25px 0 0 0"
                  bg={COLORS.green[800]}
                />
              </S.Form>
            </S.FormContent>
          </S.Transparent>
        </S.LoginContent>
        <ToastContainer />
      </S.Container>
    </Fragment>
  );
};
