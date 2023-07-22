import ActionRowCard from './components/cards/ActionRowCard'
import ArticleCard from './components/cards/ArticleCard'
import Card from './components/cards/Card'
import FileUploadCard from './components/cards/FileUploadCard'
import FillingDefaultCard from './components/cards/FillingDefaultCard'
import MediaImageRowCard from './components/cards/MediaImageRowCard'
import MultipleUploadCard from './components/cards/MultipleUploadCard'
import PdfDownloadRowItem from './components/cards/PdfDownloadRowItem'
import RowTextItem from './components/cards/RowTextItem'

import Button from './components/form/Button'
import ButtonWithAsk from './components/form/ButtonWithAsk'

import FileSelector from './components/form/FileSelector'
import ImageSelector from './components/form/ImageSelector'

import CurrencyTextField from './components/form/CurrencyTextField'
import FormaterTextField from './components/form/FormaterTextField'
import RecommendationTextField from './components/form/RecommendationTextField'
import TextArea from './components/form/TextArea'
import TextField from './components/form/TextField'
import TextFieldSelect from './components/form/TextFieldSelect'

import TextFieldButtonRow from './components/form/TextFieldButtonRow'
import TextSelect from './components/form/TextSelect'

import Expandable from './components/general/Expandable'
import HrSpacer from './components/general/HrSpacer'
import Spacer from './components/general/Spacer'

import CenterCardModal from './components/modals/CenterCardModal'
import CenterModal from './components/modals/CenterModal'
import FullImageModal from './components/modals/FullImageModal'

import PrimaryNavbarBase from './components/nav-bar/base/PrimaryNavbarBase'

import Navbar1 from './components/nav-bar/Navbar1'
import NavbarOld from './components/nav-bar/NavbarOld'

import CookieConsent from './components/popups/CookieConsent'

import CenterCardModalWizard from './components/wizards/CenterCardModalWizard'
import VerticalStepper from './components/wizards/VerticalStepper'

import Quill from './components/quill/Quill'
import QuillDisplayer from './components/quill/QuillDisplayer'
import QuillToolbar from './components/quill/QuillToolbar'

import CheckBox from './components/raw/CheckBox'
import CircularProgressPage from './components/raw/CircularProgressPage'
import CircularProgressWithLabel from './components/raw/CircularProgressWithLabel'
import LabelBadge from './components/raw/LabelBadge'
import PrimaryCircularProgress from './components/raw/PrimaryCircularProgress'
import PrimaryLinearProgress from './components/raw/PrimaryLinearProgress'
import PrimaryPagination from './components/raw/PrimaryPagination'
import PrimarySlider from './components/raw/PrimarySlider'
import Radio from './components/raw/Radio'
import Switch from './components/raw/Switch'
import TextWithCopy from './components/raw/TextWithCopy'
import ThemeSwitch from './components/raw/ThemeSwitch'
import ThemeSwitchOld from './components/raw/ThemeSwitchOld'

import Table1 from './components/tables/Table1'

import useComponentVisible from './hooks/useComponentVisible'
import useIsLessWidth from './hooks/useIsLessWidth'

import PageLayout from './components/layouts/PageLayout'

import EmailSentPage from './components/pages/EmailSentPage'
import LogoutPage from './components/pages/LogoutPage'
import PrimaryPage from './components/pages/PrimaryPage'
import ConfirmationResultPage from './components/pages/ConfirmationResultPage'

import AuthView from './components/views/AuthView'
import NotFoundView from './components/views/NotFoundView'

export { ColorType } from './common/enums/colorType'

export { loremIpsum } from './common/consts'

export { requests } from './api/baseAgent'
export { requests as requestsAxios } from './api/baseAgentAxios'

export {
  removeAllWhitespaces,
  splitNumberBy3Digits,
  appendToStringWithSpace,
  appendKc,
  toCzCurrencyString,
  removeAllNotNumber,
  downloadFile,
  isMobile,
  isTrueInLocalStorage,
  setTrueInLocalStorage,
  setFalseInLocalStorage,
  openUrlInNewTab,
  redirect,
  redirectTop,
  newTab,
  getNumberValuesFromEnum,
  isDevelopment,
  compareStringsInSearch,
  stringIsNullOrWhiteSpaces,
  getUrlGetParam
} from './services/commonService'

export {
  cookiesSetKey,
  allCookiesAcceptedKey,
  analyticalCookiesAcceptedKey,
  setValue,
  setCookiesSet,
  getCookiesSet,
  setAccept,
  setDecline,
  getAccept,
  setAllAccepted,
  getAllAccepted
} from './services/cookiesService'

export {
  type IdentityUser,
  identityTokenKey,
  identityActorKey,
  setUserLongTerm,
  clearUserLongTerm,
  getUserLongTerm,
  getTokenLongTerm,
  isLoggedInLongTerm,
  setUserSession,
  clearUserSession,
  getUserSession,
  getTokenSession,
  isLoggedInSession,
  setUser,
  clearAll,
  getUser,
  getToken,
  isLoggedIn
} from './services/identityService'

export { setLanguage, getLanguage } from './services/languageService'

export { darkThemeKey, setDarkTheme, setLightTheme, toggleTheme, isDarkTheme } from './services/themeService'

export { sleep } from './utils/common'

export { isRedirect } from './utils/statusCode'

export {
  ActionRowCard,
  ArticleCard,
  Card,
  FileUploadCard,
  FillingDefaultCard,
  MediaImageRowCard,
  MultipleUploadCard,
  PdfDownloadRowItem,
  RowTextItem
}

export { Button, ButtonWithAsk }

export { FileSelector, ImageSelector }

export {
  CurrencyTextField,
  FormaterTextField,
  RecommendationTextField,
  TextArea,
  TextField,
  TextFieldSelect,
  TextFieldButtonRow,
  TextSelect
}

export { Expandable, HrSpacer, Spacer }

export { CenterCardModal, CenterModal, FullImageModal }

export { PrimaryNavbarBase }

export { Navbar1, NavbarOld }

export { CookieConsent }

export { CenterCardModalWizard, VerticalStepper }

export { Quill, QuillDisplayer, QuillToolbar }

export {
  CheckBox,
  CircularProgressPage,
  CircularProgressWithLabel,
  LabelBadge,
  PrimaryCircularProgress,
  PrimaryLinearProgress,
  PrimaryPagination,
  PrimarySlider,
  Radio,
  Switch,
  TextWithCopy,
  ThemeSwitch,
  ThemeSwitchOld
}

export { Table1 }

export { useComponentVisible, useIsLessWidth }

export { PageLayout }

export { EmailSentPage, LogoutPage, PrimaryPage, ConfirmationResultPage }

export { AuthView, NotFoundView }
