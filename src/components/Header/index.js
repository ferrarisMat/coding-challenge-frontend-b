// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  RoutesWrapper,
  LangWrapper,
} from './styledComp';

type Props = {
    onLangItemClick: Function,
    routes: Array<String>,
    languages: Array<String>,
}

function Header(props: Props) {
  const { t } = useTranslation();
  const {
    onLangItemClick,
    routes,
    languages,
  } = props;

  // eslint-disable-next-line no-console
  console.log(routes);
  return (
    <HeaderWrapper>
      {routes.length >= 1 && (
        <RoutesWrapper>
          {routes.map((route) => {
            return (
              <Link to={route.path}>{t(`route_${route.name}`)}</Link>
            );
          })}
        </RoutesWrapper>
      )}
      {languages.length >= 1 && (
        <LangWrapper>
            {languages.map((lang) => {
              return (
                <button
                  type="button"
                  key={lang}
                  value={lang}
                  onClick={(e) => onLangItemClick(e)}
                >
                  {lang}
                </button>
              );
            })}
        </LangWrapper>
      )}
    </HeaderWrapper>
  );
}

export default Header;