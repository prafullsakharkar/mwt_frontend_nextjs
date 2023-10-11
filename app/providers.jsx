"use client";

import '@/mock-api';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { selectUser } from '@/stores/userSlice';
import { selectMainTheme } from '@/stores/core/settingsSlice';
import settingsConfig from '@/configs/settingsConfig';

import MuiTheme from '@/components/core/MuiTheme';
import { AuthProvider } from '@/auth/AuthContext';
import Authorization from '@/components/core/Authorization';

// import axios from 'axios';
/**
 * Axios HTTP Request defaults
 */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const emotionCache = {
	key: 'muiltr',
	stylisPlugins: [],
	insertionPoint: document.getElementById('emotion-insertion-point'),
};

export function Provides({ children }) {
	const user = useSelector(selectUser);
	const mainTheme = useSelector(selectMainTheme);

	return (
		<CacheProvider value={createCache(emotionCache)}>
			<MuiTheme theme={mainTheme}>
				<AuthProvider>
					<Authorization
						userRole={user.role}
						loginRedirectUrl={settingsConfig.loginRedirectUrl}
					>
						<SnackbarProvider
							maxSnack={5}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							classes={{
								containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
							}}
						>
							{children}
						</SnackbarProvider>
					</Authorization>
				</AuthProvider>
			</MuiTheme>
		</CacheProvider>
	);
}
