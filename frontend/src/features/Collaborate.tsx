import { useEffect, useMemo, useState } from "react";
import { Flex, FlexItem } from "@wordpress/components";
import { Divider, StackDivider } from '@chakra-ui/layout';
import { useTranslation } from "react-i18next";
import { useStore } from "../store";
import { useParams } from "react-router";
import ResponsiveContainer, { CommonWikiPageTextContainer, CommonWikiPageGridBox } from "../common/ResponsiveContainer";
import { Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { observer } from "mobx-react-lite";

function Collaborate() {
  const { t } = useTranslation(["common", "errors"]);
  const { commonStore, authStore } = useStore();
  const { setToken } = commonStore;
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  // Form validation schema
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
      ...(!isLogin && {
        username: Yup.string().required('Required'),
        // confirmPassword: Yup.string()
        //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //   .required('Required')
      })
    });
  }, [isLogin]);

  const handleSubmit = async (values: any, { setSubmitting, setErrors }: FormikHelpers<any>) => {
    try {
      if (isLogin) {
        // await authStore.login(values.email, values.password);
      } else {
        // await authStore.register(values.email, values.password, values.username);
      }
    } catch (error: any) {
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };
    return (
      <CommonWikiPageTextContainer>
        <FlexItem className='w-100'>
          <h3 className='w-100 mw-text mw-subheader m-1' >
            Collaborate
          </h3>
        </FlexItem>
        <FlexItem>
          <h5 className='w-100 mw-text mw-subheader-subtitle m-1' >
            Submit a request to join our commitee of reviewers.
          </h5>
        </FlexItem>
        <FlexItem>
          <ResponsiveContainer extraClasses="wikipage">
            <FlexItem>
              <CommonWikiPageGridBox >
                <h3 className='mw-text mw-bold-small-header w-100'>
                  {isLogin ? 'Login' : 'Create Account'}
                </h3>

                <Formik
                  initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    sect: undefined,
                    countryOfOrigin: undefined,
                    preferredMadhab: undefined,
                    facebookUrl: '',
                    linkedinUrl: '',
                    twitterUrl: '',
                    websiteUrl: '',
                    password: '',
                    confirmPassword: '',
                    ipAddress: '',
                    error: undefined,
                    id: undefined
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <StackDivider p='0' backgroundColor='black' border='solid 1px var(--global-color-border, currentColor)' />

                      <Grid templateColumns="repeat(2, 1fr)" gap="2">
                        <GridItem rowSpan={1} colSpan={2}>
                          <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="mw-text"
                          >
                            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
                          </button>
                        </GridItem>

                        {!isLogin && (
                          <>
                            {/* Basic Info */}
                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">First Name:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field type="text" name="firstName" className="mw-text" />
                              <ErrorMessage name="firstName" component="div" className="error-message" />
                            </GridItem>

                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Last Name:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field type="text" name="lastName" className="mw-text" />
                              <ErrorMessage name="lastName" component="div" className="error-message" />
                            </GridItem>

                            {/* Religious Info */}
                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Sect:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field as="select" name="sect" className="mw-text">
                                <option value="">Select...</option>
                                <option value="Shia">Shia</option>
                                <option value="Sunni">Sunni</option>
                              </Field>
                            </GridItem>

                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Madhab:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field as="select" name="preferredMadhab" className="mw-text">
                                <option value="">Select...</option>
                                <option value="Hanafi">Hanafi</option>
                                <option value="Shafi'i">Shafi'i</option>
                                <option value="Maliki">Maliki</option>
                                <option value="Hanbali">Hanbali</option>
                                <option value="Salafi">Salafi</option>
                                <option value="Ja'fari">Ja'fari</option>
                                <option value="Ismaili">Ismaili</option>
                                <option value="Zaydi">Zaydi</option>
                              </Field>
                            </GridItem>

                            {/* Country */}
                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Country:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              {/* <CountrySelect name="countryOfOrigin" className="mw-text" /> */}
                            </GridItem>

                            {/* Social Media */}
                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Facebook:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field type="url" name="facebookUrl" className="mw-text" />
                            </GridItem>

                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">LinkedIn:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field type="url" name="linkedinUrl" className="mw-text" />
                            </GridItem>

                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Twitter:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field type="url" name="twitterUrl" className="mw-text" />
                            </GridItem>

                            <GridItem rowSpan={1} colSpan={1}>
                              <label className="mw-text fw-bold">Website:</label>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              <Field type="url" name="websiteUrl" className="mw-text" />
                            </GridItem>
                          </>
                        )}

                        {/* Common Fields */}
                        <GridItem rowSpan={1} colSpan={1}>
                          <label className="mw-text fw-bold">Email:</label>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                          <Field type="email" name="email" className="mw-text" />
                          <ErrorMessage name="email" component="div" className="error-message" />
                        </GridItem>

                        <GridItem rowSpan={1} colSpan={1}>
                          <label className="mw-text fw-bold">Password:</label>
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                          <Field type="password" name="password" className="mw-text" />
                          <ErrorMessage name="password" component="div" className="error-message" />
                        </GridItem>

                        {!isLogin && (
                          <>
                          <GridItem rowSpan={1} colSpan={1}>
                            <label className="mw-text fw-bold">Confirm Password:</label>
                          </GridItem>
                          <GridItem rowSpan={1} colSpan={1}>
                            <Field type="password" name="confirmPassword" className="mw-text" />
                            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                          </GridItem>
                          </>
                        )}

                        <GridItem rowSpan={1} colSpan={2}>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mw-text"
                          >
                            {isLogin ? 'Login' : 'Sign Up'}
                          </button>
                          <ErrorMessage name="submit" component="div" className="error-message" />
                        </GridItem>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </CommonWikiPageGridBox>
            </FlexItem>
          </ResponsiveContainer>
        </FlexItem>
      </CommonWikiPageTextContainer>
    );
}

export default observer(Collaborate);