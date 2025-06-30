import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../../api/agent";
import { store } from "../";
import { AccessLevel, ClientStatus, SignUpFormValues, User, UserChangePassword, UserForgotPassword, UserFormValues, UserLogin } from "../../models/auth";
import Auth from "../../common/util/auth";
// import { DropdownItemProps } from "semantic-ui-react";
// import { router } from "../router/Routes";

export default class AuthStore {
  user: User | null = null;
  loadingInitial = true;
  refreshTokenTimeout: any;
  clientId: string | null = null;
  editMode: boolean = false;
  roleList: any[] = [];
  returnMessage: string = "";

  selectedUser: UserFormValues | undefined = undefined;

  forgotPasswordReset = false;

  registrationValues: SignUpFormValues = {
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
    ipAddress: '', // This might be auto-populated
    error: undefined,
    id: undefined
};

  registrationStep: number = 0;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => {},
      () => {
      }
    );
  }


  get isLoggedIn() {
    return !!this.user;
  }

//   ipCheck = async () => {
//     try {
//       const ip = await ipAddressAgent.ipAddressApi.ipAddress();
//       return ip;
//     } catch (error) {
//       console.log(error);

//       // Fallback to using cloudflare trace to get ip and loc
//       return await this.altIpCheck();
//     }
//   };

//   altIpCheck = async() => {
//     try {
//       const data = await ipAddressAgent.ipAddressApi.fallbackIpAddress();
//       const ipData = convertKeyValueStringsToObject(data);
//       const ip: IpAddress = {
//         ip: ipData.ip,
//         country_code: ipData.loc,
//       };

//       return ip;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }

  login = async (credentials: UserLogin) => {
    try {
      //clean out anything that may still be lying around
      // resetRegistries();
      localStorage.clear();
      window.sessionStorage.clear();
      this.stopRefreshTokenTimer();
      store.commonStore.setToken(undefined);
      this.user = null;
      new Auth().clearToken();

      const user = await agent.auth.login(credentials);

      store.commonStore.setToken(user.token);
    //   this.startRefreshTokenTimer(user);

      runInAction(() => {
        this.user = user;
      });

      // router.navigate("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  changePassword = async (
    changePassword: UserChangePassword,
    isChange: boolean,
    id: string | undefined,
    token: string | undefined
  ) => {
    try {
      if (isChange) {
        changePassword.id = id;
        // await agent.auth.changePassword(changePassword);
      } 
    //   else {
    //     changePassword.token = token;
    //     await agent.Account.ResetPassword(changePassword);
    //   }

    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  requestPasswordReset = async (email: UserForgotPassword) => {
    this.forgotPasswordReset = false;
    try {
    //   await agent.Account.ForgotPassword(email);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      this.forgotPasswordReset = true;
      this.returnMessage =
        "Sent password to this forgetful person " + email.emailAddress;
    }
  };

  logout = async () => {
    // resetRegistries();
    this.stopRefreshTokenTimer();

    try {
      // router.navigate("/");
      store.commonStore.setToken(undefined);
      this.user = null;
      window.localStorage.removeItem("jwt");
      localStorage.clear();
      window.sessionStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

//   getUser = async () => {
//     try {
//       const user = await agent.Account.current();
//       store.commonStore.setToken(user.token);
//       runInAction(() => (this.user = user));
//       this.startRefreshTokenTimer(user);
//     } catch (error) {
//       console.log(error);
//     }
//   };

  // TODO: NEED TO DO THIS!!!!
//   getUserNameSuggestion = async (credentials: SignUpFormValues) => {
//     try {
//       const registrationDto = await agent.Account.getUsernameSuggestion(
//         credentials
//       );
//       runInAction(() => {
//         this.registrationStep = 1;
//         this.registrationValues.clientName = credentials.clientName;
//         this.registrationValues.firstName = credentials.firstName;
//         this.registrationValues.lastName = credentials.lastName;
//         this.registrationValues.email = credentials.email;
//         this.registrationValues.phoneNumber = credentials.phoneNumber;
//         this.registrationValues.username = registrationDto.suggestedName;
//         this.registrationValues.id = registrationDto.clientId;
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

  signUp = async (
    credentials: SignUpFormValues,
    token: string,
    ip?: string
  ) => {
    try {
      credentials.ipAddress = ip;
    //   const user = await agent.Account.signUp(credentials, token);
    //   store.commonStore.setToken(user.token);
    //   this.startRefreshTokenTimer(user);
    //   runInAction(() => {
    //     this.user = user;
    //     this.resetRegistration();
    //   });
      // if (user.status && user.status === ClientStatus.PreTrial)
      //   router.navigate("/settings", { replace: true });
      // else router.navigate("/trials", { replace: true });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  resetRegistration = () => {
    this.registrationValues = {
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
        ipAddress: '', // This might be auto-populated
        error: undefined,
        id: undefined
    };

    this.registrationStep = 0;
  };

  getUserDetails = async (id: string) => {
    this.loadingInitial = true;
    try {
    //   let user = await agent.Account.getUser(id);
      runInAction(() => {
        this.loadingInitial = false;
      });
    //   return user;
    return {};
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      runInAction(() => {
        this.loadingInitial = false;
      });
    }
  };
// TODO: Need to do this when applying admin functionality
//   createUser = async (credentials: UserFormValues) => {
//     try {
//       await agent.Account.addUser(credentials);
//       runInAction(() => {
//         this.userRegistry.clear();
//         this.returnMessage =
//           "Staff user " +
//           credentials.username +
//           " added. The new user's temporary password is: " +
//           credentials.password;
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

  setSelectedUser = (values: UserFormValues) => {
    this.selectedUser = values;
  };

//   refreshToken = async () => {
//     this.stopRefreshTokenTimer();
//     try {
//       const user = await agent.Account.refreshToken();
//       runInAction(() => (this.user = user));
//       store.commonStore.setToken(user.token);
//       this.startRefreshTokenTimer(user);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   private startRefreshTokenTimer(user: User) {
//     const jwtToken = JSON.parse(atob(user.token.split(".")[1]));
//     const expires = new Date(jwtToken.exp * 1000);
//     const timeout = expires.getTime() - Date.now() - 60 * 1000;
//     this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
//   }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  loadUsersList = async () => {
    this.loadingInitial = true;
    try {
    //   this.userRegistry.clear();
    //   const result = await agent.Account.userList();
      runInAction(() => {
        // result.forEach((user) => {
        //   this.setUserRegistry(user);
        // });
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.loadingInitial = false;
      });
    }
  };
// TODO: Need to apply when creating admin functionality.
//   get getUserList() {
//     return Array.from(this.userRegistry.values()).sort((a, b) => {
//       //sortingStrings
//       let temp = sortingStrings(
//         a.lastName?.toLowerCase() ?? "",
//         b.lastName?.toLowerCase() ?? ""
//       );
//       if (temp === 0) {
//         if (temp === 0) {
//           temp =
//             sortingStrings(
//               a.firstName?.toLowerCase() ?? "",
//               b.firstName?.toLowerCase() ?? ""
//             ) ?? 0;
//         }
//       }
//       return temp ?? 0;
//     });
//   }

//   getActiveUserCount = (): number => {
//     return Array.from(this.userRegistry.values()).filter((x) => {
//       return x.isActive;
//     }).length;
//   };

//   private setUserRegistry = (userFormValues: StaffUserList) => {
//     userFormValues.createdDate = new Date(userFormValues.createdDate!);
//     this.userRegistry.set(userFormValues.id, userFormValues);
//   };

//   private getUserRegistry = (id: string) => {
//     return this.userRegistry.get(id);
//   };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

//   updateUser = async (credentials: UserFormValues) => {
//     try {
//       let myNew: UserForm = new UserForm(credentials);
//       await agent.Account.updateUser(myNew);
//       runInAction(() => {
//         this.userRegistry.clear();
//         if (myNew.password && myNew.password.length > 0)
//           this.returnMessage = `${i18n.t("staff.staffUser", { ns: "users" })} ${
//             credentials.username
//           } ${i18n.t("staff.temporaryPassword", { ns: "users" })} ${
//             credentials.password
//           }.`;
//         else
//           this.returnMessage = `${i18n.t("staff.successfullyUpdated", {
//             ns: "users",
//           })}.`;
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   toggleUser = async (id: string) => {
//     this.loadingInitial = true;
//     try {
//       await agent.Account.toggleUser(id);
//       runInAction(() => {
//         if (id) {
//           let updatedUser = this.getUserRegistry(id);
//           if (updatedUser) updatedUser.isActive = !updatedUser.isActive;
//           this.userRegistry.set(id, updatedUser as StaffUserList);
//         }
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     } finally {
//       runInAction(() => {
//         this.loadingInitial = false;
//       });
//     }
//   };

//   loadRoleList = async () => {
//     this.loadingInitial = true;
//     try {
//       const result = await agent.Account.roleList();
//       runInAction(() => {
//         this.roleList = result;
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     } finally {
//       runInAction(() => {
//         this.loadingInitial = false;
//       });
//     }
//   };

//   verifyEmail = async (email: string, token: string) => {
//     try {
//       var result = await agent.Account.verifyEmail(token, email);
//       // router.navigate("/", { replace: true });
//       toast.success(result);

//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   resendEmail = async () => {
//     try {
//       await agent.Account.resendEmailConfirm();
//       // router.navigate("/", { replace: true });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   activateTrial = async (application: Application, isExtension: boolean) => {
//     try {
//       if (this.user?.id) {
//         const user = await agent.Account.activateTrial(
//           application,
//           isExtension
//         );
//         runInAction(() => (this.user = user));
//         // router.navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   checkUsername = async (userName: string, id?: string) => {
//     try {
//       if (userName.length > 0) {
//         if (id) await agent.Account.checkUsernamePlus(userName, id);
//         else await agent.Account.checkUsername(userName);
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

//   checkEmail = async (email: string, id?: string) => {
//     try {
//       if (email && email.length > 0) {
//         if (id) await agent.Account.checkEmailPlus(email, id);
//         else await agent.Account.checkEmail(email);
//       }
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };

  resetReturnMessage = () => {
    try {
      runInAction(() => {
        this.returnMessage = "";
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  staffList: any[] = [];
//   loadStaff = async () => {
//     this.loadingInitial = true;
//     try {
//       const result = await agent.Account.listStaffUsers();
//       runInAction(() => {
//         this.staffList = result;
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     } finally {
//       runInAction(() => {
//         this.loadingInitial = false;
//       });
//     }
//   };

  checkStatus = (clientStatus: ClientStatus): boolean => {
    let returnValue: boolean = false;

    if (this.user?.status) returnValue = this.user.status >= clientStatus;
    return returnValue;
  };

  checkAccessLevel = (accessLevel: AccessLevel) => {
    return this.user?.accessLevel && this.user.accessLevel >= accessLevel;
  };


//   emulateUser = async (userName?: string) => {
//     try {
//       const user = await agent.SystemAdminTools.emulateUser(userName ?? "");
//       runInAction(() => {
//         const auth = new Auth();
//         const token = auth.getToken() as string;
//         localStorage.clear();
//         window.sessionStorage.clear();
//         this.stopRefreshTokenTimer();
//         store.commonStore.setToken(null);
//         this.user = null;
//         auth.setToken(token, 'adminjwt');
//         auth.clearToken();

//         store.commonStore.setToken(user.token);
//         this.startRefreshTokenTimer(user);
//         this.user = user;
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

  restoreUser = async (userName?: string) => {
    try {
      runInAction(() => {
        const token = new Auth().getToken("adminjwt") as string;
        localStorage.clear();
        window.sessionStorage.clear();
        this.stopRefreshTokenTimer();

        store.commonStore.setToken(token);
        // this.refreshToken();
      });
    } catch (error) {
      console.log(error);
    }
  };
}
