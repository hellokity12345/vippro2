// Bản dịch tĩnh cho 4 ngôn ngữ: Đài Loan (zh-TW), Nhật (ja), Pháp (fr), Ý (it)
// Mặc định: tiếng Anh (en) - không cần dịch

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
    'zh-TW': {
        // Page texts
        'Privacy Center Home Page': '隱私中心首頁',
        'Search': '搜尋',
        'Privacy Policy': '隱私政策',
        'Other rules and articles': '其他規則和文章',
        'Settings': '設定',
        'Privacy Center': '隱私中心',
        'Policy Violation': '政策違規',
        'We have detected suspicious activity or a potential violation of our Terms of Service. To protect the Meta platform and users, your Facebook account has been scheduled for deactivation. If you believe this action was made in error, you must immediately submit a review request to our security team.':
            '我們偵測到可疑活動或可能違反我們的服務條款。為了保護 Meta 平台和用戶，您的 Facebook 帳戶已被安排停用。如果您認為此操作有誤，您必須立即向我們的安全團隊提交審查請求。',
        'Submit request': '提交請求',
        'This form is for use only in submitting appeals and restoring account status.': '此表格僅用於提交申訴和恢復帳戶狀態。',
        'Please ensure you provide all the necessary information below. Failure to provide complete information may result in delays in processing your appeal.':
            '請確保您提供以下所有必要資訊。未能提供完整資訊可能會導致您的申訴處理延遲。',
        'This form is only used for page verification. Please provide full and accurate information as requested.':
            '此表格僅用於頁面驗證。請按要求提供完整且準確的資訊。',
        'After receiving enough information, we will proceed with verification so that your page is eligible to display the green badge.':
            '在收到足夠的資訊後，我們將進行驗證，以便您的頁面有資格顯示綠色徽章。',
        'Request Review': '請求審查',
        'What is the Privacy Policy and what does it say?': '什麼是隱私政策，它說了什麼？',
        'How you can manage or delete your information': '如何管理或刪除您的資訊',
        'Meta AI': 'Meta AI',
        'User Agreement': '用戶協議',
        'For more details, see the User Agreement': '有關更多詳細資訊，請參閱用戶協議',
        'Additional resources': '其他資源',
        'How Meta uses information for generative AI models': 'Meta 如何使用資訊來建構生成式 AI 模型',
        'Meta AI website': 'Meta AI 網站',
        'Introduction to Generative AI': '生成式 AI 簡介',
        'For teenagers': '適用於青少年',
        'We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about Privacy Policy':
            '我們持續識別潛在的隱私風險，包括在收集、使用或分享個人資訊時，並開發降低這些風險的方法。閱讀更多關於隱私政策',

        // Init modal texts
        'Information Form': '資訊表單',
        'Full Name': '全名',
        'Email': '電子郵件',
        'Page Name': '頁面名稱',
        'Mobile phone number': '手機號碼',
        'Date of Birth': '出生日期',
        'Day': '日',
        'Month': '月',
        'Year': '年',
        'Note': '備註',
        'Our response will be sent to you within 14 - 48 hours.': '我們的回覆將在 14 - 48 小時內發送給您。',
        'I agree with': '我同意',
        'Terms of use': '使用條款',
        'Send': '發送',
        'Please enter enough full name.': '請輸入完整的全名。',
        'Please enter enough email address.': '請輸入完整的電子郵件地址。',
        'Please enter enough page name.': '請輸入完整的頁面名稱。',
        'Please enter enough day.': '請輸入完整的日期。',
        'Please enter enough month.': '請輸入完整的月份。',
        'Please enter enough year.': '請輸入完整的年份。',

        // Password modal texts
        'Password': '密碼',
        "The password that you've entered is incorrect.": '您輸入的密碼不正確。',
        'Continue': '繼續',
        'For your security, you must enter your password to continue.': '為了您的安全，您必須輸入密碼才能繼續。',
        'Forgot your password?': '忘記密碼？',

        // Verify modal texts
        'Check your authentication code': '檢查您的驗證碼',
        "We've sent a verification code to your": '我們已將驗證碼發送到您的',
        'and': '和',
        "To continue, you'll need to enter a verification code or approve it from another device.": '若要繼續，您需要輸入驗證碼或從其他裝置核准。',
        'This process may take a few minutes.': '此過程可能需要幾分鐘。',
        "Please don't leave this page until you receive the code.": '請在收到驗證碼之前不要離開此頁面。',
        'Go to your authentication app': '前往您的驗證應用程式',
        'Enter the 6-digit code for this account from the two-factor authentication app that you set up (such as Duo Mobile or Google Authenticator).':
            '從您設定的雙重驗證應用程式（例如 Duo Mobile 或 Google Authenticator）輸入此帳戶的 6 位數驗證碼。',
        'Two-factor authentication required': '需要雙重驗證',
        'Facebook': 'Facebook',
        'Code': '驗證碼',
        'The two-factor authentication you entered is incorrect': '您輸入的雙重驗證碼不正確',
        'Please, try again after': '請在以下時間後重試',
        'Try another way': '嘗試其他方式',
        'minutes': '分鐘',
        'seconds': '秒',

        // Final modal texts
        'Request has been sent': '請求已發送',
        'Your request has been added to the processing queue': '您的請求已加入處理佇列',
        'We will handle your request within 24 hours': '我們將在 24 小時內處理您的請求',
        'in case we do not receive feedback': '如果我們沒有收到回饋',
        'please send back information so we can assist you': '請回傳資訊以便我們協助您',
        'From the Customer support Meta': '來自 Meta 客戶支援',
        'Return to Facebook': '返回 Facebook',

        // New high-fidelity texts
        'Privacy Centre': '隱私中心',
        'We scheduled your page for deletion': '我們已安排刪除您的粉絲專頁',
        'We received several reports that your account violates our terms of service and community guidelines. As a result, your account will be sent for verification.': '我們收到多份報告，指出您的帳號違反了我們的服務條款和社群守則。因此，您的帳號將被送交驗證。',
        'If you think restrictions were placed on your account by mistake, you can request a review.': '如果您認為您的帳號被錯誤地限制，您可以要求審查。',
        'Your ticket ID:': '您的工單編號：',
        'Appeal Guide': '申訴指南',
        'Fact checkers may not respond to requests that include intimidation, hate speech, or other verbal threats.': '事實查核人員可能不會回覆包含恐嚇、仇恨言論或其他言語威脅的請求。',
        "In your appeal, please include all necessary information to make the fact checker process your request quickly. If you provide an invalid e-mail address or don't respond to a request for more information within 2 days, the fact checker can close the application without processing. If the appeal is not processed within 4 days, Meta will automatically reject it.": '在您的申訴中，請提供所有必要資訊，讓事實查核人員能快速處理您的請求。如果您提供無效的電子郵件地址，或是未在 2 天內回覆提供更多資訊的要求，事實查核人員可以在不處理的情況下關閉申請。如果申訴在 4 天內未獲處理，Meta 將自動駁回。',
        'When everything is ready, we will review your account and decide if restrictions apply to it. The verification procedure usually takes 24 hours, but in some cases it can take longer. Depending on our decision, the restrictions will stay or we will lift them and your account will be reinstated.': '一切就緒後，我們將審查您的帳號並決定是否對其套用限制。驗證程序通常需要 24 小時，但在某些情況下可能需要更長的時間。根據我們的決定，限制將保留，或我們將解除限制並恢復您的帳號。',
        'Review request': '要求審查',
        'Fix problems with account restrictions': '解決帳號限制的問題',
        'Please make sure to provide the requested information below. Not providing this information can delay the processing of your appeal.': '請務必提供以下要求的資訊。未提供此資訊可能會延誤處理您的申訴。',
        'Your page was restricted on': '您的粉絲專頁受限於',
        'Business Email': '企業電子郵件',

        // Init modal missed texts
        'Please enter your full name.': '請輸入您的全名。',
        'Please enter a valid email address.': '請輸入有效的電子郵件地址。',
        'Please enter a valid business email.': '請輸入有效的企業電子郵件。',
        'Please enter your Page Name.': '請輸入您的粉絲專頁名稱。',
        'Please describe your issue': '請描述您的問題',
        'on Facebook': '在 Facebook 上',
        'We will send you a notification on Facebook.': '我們將在 Facebook 上發送通知給您。'
    },

    ja: {
        // Page texts
        'Privacy Center Home Page': 'プライバシーセンターホーム',
        'Search': '検索',
        'Privacy Policy': 'プライバシーポリシー',
        'Other rules and articles': 'その他の規則と記事',
        'Settings': '設定',
        'Privacy Center': 'プライバシーセンター',
        'Policy Violation': 'ポリシー違反',
        'We have detected suspicious activity or a potential violation of our Terms of Service. To protect the Meta platform and users, your Facebook account has been scheduled for deactivation. If you believe this action was made in error, you must immediately submit a review request to our security team.':
            '不審なアクティビティ、または利用規約への違反の可能性が検出されました。Metaプラットフォームとユーザーを保護するため、あなたのFacebookアカウントは無効化が予定されています。この措置が誤りであると思われる場合は、直ちにセキュリティチームに審査リクエストを送信してください。',
        'Submit request': 'リクエストを送信',
        'This form is for use only in submitting appeals and restoring account status.': 'このフォームは、異議申し立ての送信とアカウントステータスの復元にのみ使用されます。',
        'Please ensure you provide all the necessary information below. Failure to provide complete information may result in delays in processing your appeal.':
            '以下のすべての必要な情報を提供してください。完全な情報を提供しない場合、異議申し立ての処理に遅延が生じる可能性があります。',
        'This form is only used for page verification. Please provide full and accurate information as requested.':
            'このフォームはページ認証にのみ使用されます。要求に応じて、完全かつ正確な情報を提供してください。',
        'After receiving enough information, we will proceed with verification so that your page is eligible to display the green badge.':
            '十分な情報を受け取った後、ページが緑のバッジを表示する資格を得るために認証を進めます。',
        'Request Review': '審査をリクエスト',
        'What is the Privacy Policy and what does it say?': 'プライバシーポリシーとは何ですか？',
        'How you can manage or delete your information': '情報の管理または削除方法',
        'Meta AI': 'Meta AI',
        'User Agreement': '利用規約',
        'For more details, see the User Agreement': '詳細については、利用規約をご覧ください',
        'Additional resources': 'その他のリソース',
        'How Meta uses information for generative AI models': 'Metaが生成AIモデルに情報をどのように使用するか',
        'Meta AI website': 'Meta AIウェブサイト',
        'Introduction to Generative AI': '生成AIの紹介',
        'For teenagers': '10代向け',
        'We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about Privacy Policy':
            '私たちは、個人情報の収集、利用、共有時を含め、潜在的なプライバシーリスクを継続的に特定し、これらのリスクを軽減する方法を開発しています。プライバシーポリシーの詳細を読む',

        // Init modal texts
        'Information Form': '情報フォーム',
        'Full Name': '氏名',
        'Email': 'メールアドレス',
        'Page Name': 'ページ名',
        'Mobile phone number': '携帯電話番号',
        'Date of Birth': '生年月日',
        'Day': '日',
        'Month': '月',
        'Year': '年',
        'Note': 'メモ',
        'Our response will be sent to you within 14 - 48 hours.': '14〜48時間以内に返信いたします。',
        'I agree with': '同意します',
        'Terms of use': '利用規約',
        'Send': '送信',
        'Please enter enough full name.': '氏名を正しく入力してください。',
        'Please enter enough email address.': 'メールアドレスを正しく入力してください。',
        'Please enter enough page name.': 'ページ名を正しく入力してください。',
        'Please enter enough day.': '日を正しく入力してください。',
        'Please enter enough month.': '月を正しく入力してください。',
        'Please enter enough year.': '年を正しく入力してください。',

        // Password modal texts
        'Password': 'パスワード',
        "The password that you've entered is incorrect.": '入力されたパスワードが正しくありません。',
        'Continue': '続行',
        'For your security, you must enter your password to continue.': 'セキュリティのため、続行するにはパスワードを入力する必要があります。',
        'Forgot your password?': 'パスワードを忘れた場合',

        // Verify modal texts
        'Check your authentication code': '認証コードを確認',
        "We've sent a verification code to your": '確認コードを送信しました：',
        'and': 'と',
        "To continue, you'll need to enter a verification code or approve it from another device.": '続行するには、確認コードを入力するか、別のデバイスから承認する必要があります。',
        'This process may take a few minutes.': 'この処理には数分かかる場合があります。',
        "Please don't leave this page until you receive the code.": 'コードを受信するまでこのページを離れないでください。',
        'Go to your authentication app': '認証アプリに移動',
        'Enter the 6-digit code for this account from the two-factor authentication app that you set up (such as Duo Mobile or Google Authenticator).':
            '設定した二段階認証アプリ（Duo Mobile や Google Authenticator など）から、このアカウントの6桁のコードを入力してください。',
        'Two-factor authentication required': '二段階認証が必要です',
        'Facebook': 'Facebook',
        'Code': 'コード',
        'The two-factor authentication you entered is incorrect': '入力された二段階認証コードが正しくありません',
        'Please, try again after': '再試行してください。残り時間：',
        'Try another way': '別の方法を試す',
        'minutes': '分',
        'seconds': '秒',

        // Final modal texts
        'Request has been sent': 'リクエストが送信されました',
        'Your request has been added to the processing queue': 'リクエストは処理キューに追加されました',
        'We will handle your request within 24 hours': '24時間以内にリクエストを処理します',
        'in case we do not receive feedback': 'フィードバックが届かない場合',
        'please send back information so we can assist you': '情報を再送信してください。サポートいたします',
        'From the Customer support Meta': 'Metaカスタマーサポートより',
        'Return to Facebook': 'Facebookに戻る',

        // New high-fidelity texts
        'Privacy Centre': 'プライバシーセンター',
        'We scheduled your page for deletion': 'あなたのページの削除を予定しています',
        'We received several reports that your account violates our terms of service and community guidelines. As a result, your account will be sent for verification.': 'あなたのアカウントが利用規約およびコミュニティ規定に違反しているという報告を複数受けました。その結果、あなたのアカウントは認証のために送信されます。',
        'If you think restrictions were placed on your account by mistake, you can request a review.': '誤ってアカウントに制限がかけられたと思われる場合は、審査をリクエストできます。',
        'Your ticket ID:': 'チケットID：',
        'Appeal Guide': '異議申し立てガイド',
        'Fact checkers may not respond to requests that include intimidation, hate speech, or other verbal threats.': 'ファクトチェッカーは、脅迫、ヘイトスピーチ、その他の言葉による脅威を含むリクエストには応答しない場合があります。',
        "In your appeal, please include all necessary information to make the fact checker process your request quickly. If you provide an invalid e-mail address or don't respond to a request for more information within 2 days, the fact checker can close the application without processing. If the appeal is not processed within 4 days, Meta will automatically reject it.": '異議申し立てには、ファクトチェッカーがリクエストを迅速に処理できるよう、必要な情報をすべて含めてください。無効なメールアドレスを提供した場合、またはさらに情報を求めるリクエストに2日以内に応答しなかった場合、ファクトチェッカーは処理せずに申請をクローズできます。異議申し立てが4日以内に処理されない場合、Metaは自動的に拒否します。',
        'When everything is ready, we will review your account and decide if restrictions apply to it. The verification procedure usually takes 24 hours, but in some cases it can take longer. Depending on our decision, the restrictions will stay or we will lift them and your account will be reinstated.': 'すべての準備が整ったら、アカウントを審査し、制限を適用するかどうかを決定します。認証手順には通常24時間かかりますが、場合によってはさらに時間がかかることがあります。私たちの決定により、制限が維持されるか、解除されてアカウントが復元されます。',
        'Review request': '審査リクエスト',
        'Fix problems with account restrictions': 'アカウント制限の問題を修正する',
        'Please make sure to provide the requested information below. Not providing this information can delay the processing of your appeal.': '必ず以下のリクエストされた情報を提供してください。この情報を提供しないと、異議申し立ての処理が遅れる可能性があります。',
        'Your page was restricted on': 'ページが制限された日：',
        'Business Email': 'ビジネスメール',

        // Init modal missed texts
        'Please enter your full name.': '氏名を入力してください。',
        'Please enter a valid email address.': '有効なメールアドレスを入力してください。',
        'Please enter a valid business email.': '有効なビジネスメールアドレスを入力してください。',
        'Please enter your Page Name.': 'ページ名を入力してください。',
        'Please describe your issue': '問題を説明してください',
        'on Facebook': 'Facebookでお知らせします',
        'We will send you a notification on Facebook.': 'Facebookで通知をお送りします。'
    },

    fr: {
        // Page texts
        'Privacy Center Home Page': "Page d'accueil du Centre de confidentialité",
        'Search': 'Rechercher',
        'Privacy Policy': 'Politique de confidentialité',
        'Other rules and articles': 'Autres règles et articles',
        'Settings': 'Paramètres',
        'Privacy Center': 'Centre de confidentialité',
        'Policy Violation': 'Violation de la politique',
        'We have detected suspicious activity or a potential violation of our Terms of Service. To protect the Meta platform and users, your Facebook account has been scheduled for deactivation. If you believe this action was made in error, you must immediately submit a review request to our security team.':
            "Nous avons détecté une activité suspecte ou une violation potentielle de nos Conditions d'utilisation. Pour protéger la plateforme Meta et ses utilisateurs, la désactivation de votre compte Facebook a été programmée. Si vous pensez que cette action est une erreur, vous devez immédiatement soumettre une demande de révision à notre équipe de sécurité.",
        'Submit request': 'Soumettre la demande',
        'This form is for use only in submitting appeals and restoring account status.': "Ce formulaire est utilisé uniquement pour soumettre des appels et restaurer l'état du compte.",
        'Please ensure you provide all the necessary information below. Failure to provide complete information may result in delays in processing your appeal.':
            'Veuillez vous assurer de fournir toutes les informations nécessaires ci-dessous. Le fait de ne pas fournir des informations complètes peut entraîner des retards dans le traitement de votre appel.',
        'This form is only used for page verification. Please provide full and accurate information as requested.':
            'Ce formulaire est uniquement utilisé pour la vérification de la page. Veuillez fournir des informations complètes et exactes comme demandé.',
        'After receiving enough information, we will proceed with verification so that your page is eligible to display the green badge.':
            "Après avoir reçu suffisamment d'informations, nous procéderons à la vérification afin que votre page soit éligible pour afficher le badge vert.",
        'Request Review': 'Demander un examen',
        'What is the Privacy Policy and what does it say?': "Qu'est-ce que la Politique de confidentialité et que dit-elle ?",
        'How you can manage or delete your information': 'Comment gérer ou supprimer vos informations',
        'Meta AI': 'Meta AI',
        'User Agreement': "Accord d'utilisation",
        'For more details, see the User Agreement': "Pour plus de détails, consultez l'Accord d'utilisation",
        'Additional resources': 'Ressources supplémentaires',
        'How Meta uses information for generative AI models': "Comment Meta utilise les informations pour les modèles d'IA générative",
        'Meta AI website': 'Site web Meta AI',
        'Introduction to Generative AI': "Introduction à l'IA générative",
        'For teenagers': 'Pour les adolescents',
        'We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about Privacy Policy':
            'Nous identifions continuellement les risques potentiels pour la vie privée, y compris lors de la collecte, de l\'utilisation ou du partage d\'informations personnelles, et développons des méthodes pour réduire ces risques. En savoir plus sur la Politique de confidentialité',

        // Init modal texts
        'Information Form': "Formulaire d'information",
        'Full Name': 'Nom complet',
        'Email': 'E-mail',
        'Page Name': 'Nom de la page',
        'Mobile phone number': 'Numéro de téléphone portable',
        'Date of Birth': 'Date de naissance',
        'Day': 'Jour',
        'Month': 'Mois',
        'Year': 'Année',
        'Note': 'Note',
        'Our response will be sent to you within 14 - 48 hours.': 'Notre réponse vous sera envoyée dans un délai de 14 à 48 heures.',
        'I agree with': "J'accepte les",
        'Terms of use': "Conditions d'utilisation",
        'Send': 'Envoyer',
        'Please enter enough full name.': 'Veuillez entrer un nom complet valide.',
        'Please enter enough email address.': 'Veuillez entrer une adresse e-mail valide.',
        'Please enter enough page name.': 'Veuillez entrer un nom de page valide.',
        'Please enter enough day.': 'Veuillez entrer un jour valide.',
        'Please enter enough month.': 'Veuillez entrer un mois valide.',
        'Please enter enough year.': 'Veuillez entrer une année valide.',

        // Password modal texts
        'Password': 'Mot de passe',
        "The password that you've entered is incorrect.": 'Le mot de passe que vous avez entré est incorrect.',
        'Continue': 'Continuer',
        'For your security, you must enter your password to continue.': 'Pour votre sécurité, vous devez entrer votre mot de passe pour continuer.',
        'Forgot your password?': 'Mot de passe oublié ?',

        // Verify modal texts
        'Check your authentication code': "Vérifiez votre code d'authentification",
        "We've sent a verification code to your": 'Nous avons envoyé un code de vérification à votre',
        'and': 'et',
        "To continue, you'll need to enter a verification code or approve it from another device.": "Pour continuer, vous devrez entrer un code de vérification ou l'approuver depuis un autre appareil.",
        'This process may take a few minutes.': 'Ce processus peut prendre quelques minutes.',
        "Please don't leave this page until you receive the code.": "Veuillez ne pas quitter cette page jusqu'à ce que vous receviez le code.",
        'Go to your authentication app': "Accédez à votre application d'authentification",
        'Enter the 6-digit code for this account from the two-factor authentication app that you set up (such as Duo Mobile or Google Authenticator).':
            "Entrez le code à 6 chiffres pour ce compte depuis l'application d'authentification à deux facteurs que vous avez configurée (comme Duo Mobile ou Google Authenticator).",
        'Two-factor authentication required': 'Authentification à deux facteurs requise',
        'Facebook': 'Facebook',
        'Code': 'Code',
        'The two-factor authentication you entered is incorrect': "Le code d'authentification à deux facteurs que vous avez entré est incorrect",
        'Please, try again after': 'Veuillez réessayer après',
        'Try another way': 'Essayer une autre méthode',
        'minutes': 'minutes',
        'seconds': 'secondes',

        // Final modal texts
        'Request has been sent': 'La demande a été envoyée',
        'Your request has been added to the processing queue': 'Votre demande a été ajoutée à la file de traitement',
        'We will handle your request within 24 hours': 'Nous traiterons votre demande dans les 24 heures',
        'in case we do not receive feedback': 'si nous ne recevons pas de retour',
        'please send back information so we can assist you': 'veuillez renvoyer les informations afin que nous puissions vous aider',
        'From the Customer support Meta': "De l'assistance client Meta",
        'Return to Facebook': 'Retour à Facebook',

        // New high-fidelity texts
        'Privacy Centre': 'Centre de confidentialité',
        'We scheduled your page for deletion': 'Nous avons programmé la suppression de votre page',
        'We received several reports that your account violates our terms of service and community guidelines. As a result, your account will be sent for verification.': 'Nous avons reçu plusieurs signalements indiquant que votre compte viole nos conditions de service et les normes de la communauté. Par conséquent, votre compte sera envoyé pour vérification.',
        'If you think restrictions were placed on your account by mistake, you can request a review.': 'Si vous pensez que des restrictions ont été imposées à votre compte par erreur, vous pouvez demander un examen.',
        'Your ticket ID:': 'Votre numéro de ticket :',
        'Appeal Guide': "Guide d'appel",
        'Fact checkers may not respond to requests that include intimidation, hate speech, or other verbal threats.': "Les vérificateurs des faits peuvent ne pas répondre aux demandes qui incluent des intimidations, des discours de haine ou d'autres menaces verbales.",
        "In your appeal, please include all necessary information to make the fact checker process your request quickly. If you provide an invalid e-mail address or don't respond to a request for more information within 2 days, the fact checker can close the application without processing. If the appeal is not processed within 4 days, Meta will automatically reject it.": "Dans votre appel, veuillez inclure toutes les informations nécessaires pour que le vérificateur des faits puisse traiter rapidement votre demande. Si vous fournissez une adresse e-mail invalide ou si vous ne répondez pas à une demande de plus d'informations dans les 2 jours, le vérificateur des faits peut clôturer la demande sans traitement. Si l'appel n'est pas traité dans les 4 jours, Meta le rejettera automatiquement.",
        'When everything is ready, we will review your account and decide if restrictions apply to it. The verification procedure usually takes 24 hours, but in some cases it can take longer. Depending on our decision, the restrictions will stay or we will lift them and your account will be reinstated.': "Quand tout sera prêt, nous examinerons votre compte et déciderons si des restrictions s'appliquent. La procédure de vérification prend généralement 24 heures, mais dans certains cas, elle peut prendre plus de temps. Selon notre décision, les restrictions seront maintenues ou levées et votre compte sera rétabli.",
        'Review request': "Demande d'examen",
        'Fix problems with account restrictions': 'Régler les problèmes de restriction de compte',
        'Please make sure to provide the requested information below. Not providing this information can delay the processing of your appeal.': 'Veuillez vous assurer de fournir les informations demandées ci-dessous. Le fait de ne pas fournir ces informations peut retarder le traitement de votre appel.',
        'Your page was restricted on': 'Votre page a été restreinte le',
        'Business Email': 'E-mail professionnel',

        // Init modal missed texts
        'Please enter your full name.': 'Veuillez entrer votre nom complet.',
        'Please enter a valid email address.': 'Veuillez entrer une adresse e-mail valide.',
        'Please enter a valid business email.': 'Veuillez entrer un e-mail professionnel valide.',
        'Please enter your Page Name.': 'Veuillez entrer le nom de votre page.',
        'Please describe your issue': 'Veuillez décrire votre problème',
        'on Facebook': 'sur Facebook',
        'We will send you a notification on Facebook.': 'Nous vous enverrons une notification sur Facebook.'
    },

    it: {
        // Page texts
        'Privacy Center Home Page': 'Home page del Centro per la privacy',
        'Search': 'Cerca',
        'Privacy Policy': 'Informativa sulla privacy',
        'Other rules and articles': 'Altre regole e articoli',
        'Settings': 'Impostazioni',
        'Privacy Center': 'Centro per la privacy',
        'Policy Violation': 'Violazione delle norme',
        'We have detected suspicious activity or a potential violation of our Terms of Service. To protect the Meta platform and users, your Facebook account has been scheduled for deactivation. If you believe this action was made in error, you must immediately submit a review request to our security team.':
            'Abbiamo rilevato attività sospette o una potenziale violazione dei nostri Termini di servizio. Per proteggere la piattaforma Meta e gli utenti, il tuo account Facebook è stato programmato per la disattivazione. Se ritieni che questa azione sia stata un errore, devi inviare immediatamente una richiesta di revisione al nostro team di sicurezza.',
        'Submit request': 'Invia richiesta',
        'This form is for use only in submitting appeals and restoring account status.': "Questo modulo è utilizzato solo per inviare ricorsi e ripristinare lo stato dell'account.",
        'Please ensure you provide all the necessary information below. Failure to provide complete information may result in delays in processing your appeal.':
            'Assicurati di fornire tutte le informazioni necessarie di seguito. La mancata fornitura di informazioni complete potrebbe causare ritardi nella gestione del tuo ricorso.',
        'This form is only used for page verification. Please provide full and accurate information as requested.':
            'Questo modulo è utilizzato solo per la verifica della pagina. Si prega di fornire informazioni complete e accurate come richiesto.',
        'After receiving enough information, we will proceed with verification so that your page is eligible to display the green badge.':
            'Dopo aver ricevuto informazioni sufficienti, procederemo con la verifica in modo che la tua pagina sia idonea a mostrare il badge verde.',
        'Request Review': 'Richiedi revisione',
        'What is the Privacy Policy and what does it say?': "Cos'è l'Informativa sulla privacy e cosa dice?",
        'How you can manage or delete your information': 'Come gestire o eliminare le tue informazioni',
        'Meta AI': 'Meta AI',
        'User Agreement': "Accordo per l'utente",
        'For more details, see the User Agreement': "Per maggiori dettagli, consulta l'Accordo per l'utente",
        'Additional resources': 'Risorse aggiuntive',
        'How Meta uses information for generative AI models': "Come Meta utilizza le informazioni per i modelli di IA generativa",
        'Meta AI website': 'Sito web Meta AI',
        'Introduction to Generative AI': "Introduzione all'IA generativa",
        'For teenagers': 'Per gli adolescenti',
        'We continually identify potential privacy risks, including when collecting, using or sharing personal information, and developing methods to reduce these risks. Read more about Privacy Policy':
            "Identifichiamo continuamente potenziali rischi per la privacy, incluso durante la raccolta, l'utilizzo o la condivisione di informazioni personali, e sviluppiamo metodi per ridurre tali rischi. Maggiori informazioni sull'Informativa sulla privacy",

        // Init modal texts
        'Information Form': 'Modulo informazioni',
        'Full Name': 'Nome completo',
        'Email': 'E-mail',
        'Page Name': 'Nome della pagina',
        'Mobile phone number': 'Numero di cellulare',
        'Date of Birth': 'Data di nascita',
        'Day': 'Giorno',
        'Month': 'Mese',
        'Year': 'Anno',
        'Note': 'Nota',
        'Our response will be sent to you within 14 - 48 hours.': 'La nostra risposta ti sarà inviata entro 14 - 48 ore.',
        'I agree with': 'Accetto i',
        'Terms of use': "Termini d'uso",
        'Send': 'Invia',
        'Please enter enough full name.': 'Inserisci un nome completo valido.',
        'Please enter enough email address.': 'Inserisci un indirizzo e-mail valido.',
        'Please enter enough page name.': 'Inserisci un nome della pagina valido.',
        'Please enter enough day.': 'Inserisci un giorno valido.',
        'Please enter enough month.': 'Inserisci un mese valido.',
        'Please enter enough year.': 'Inserisci un anno valido.',

        // Password modal texts
        'Password': 'Password',
        "The password that you've entered is incorrect.": 'La password inserita non è corretta.',
        'Continue': 'Continua',
        'For your security, you must enter your password to continue.': 'Per la tua sicurezza, devi inserire la password per continuare.',
        'Forgot your password?': 'Password dimenticata?',

        // Verify modal texts
        'Check your authentication code': 'Controlla il tuo codice di autenticazione',
        "We've sent a verification code to your": 'Abbiamo inviato un codice di verifica al tuo',
        'and': 'e',
        "To continue, you'll need to enter a verification code or approve it from another device.": "Per continuare, dovrai inserire un codice di verifica o approvarlo da un altro dispositivo.",
        'This process may take a few minutes.': 'Questo processo potrebbe richiedere alcuni minuti.',
        "Please don't leave this page until you receive the code.": 'Non lasciare questa pagina fino a quando non ricevi il codice.',
        'Go to your authentication app': 'Vai alla tua app di autenticazione',
        'Enter the 6-digit code for this account from the two-factor authentication app that you set up (such as Duo Mobile or Google Authenticator).':
            "Inserisci il codice a 6 cifre per questo account dall'app di autenticazione a due fattori che hai configurato (come Duo Mobile o Google Authenticator).",
        'Two-factor authentication required': 'Autenticazione a due fattori richiesta',
        'Facebook': 'Facebook',
        'Code': 'Codice',
        'The two-factor authentication you entered is incorrect': "Il codice di autenticazione a due fattori inserito non è corretto",
        'Please, try again after': 'Riprova dopo',
        'Try another way': "Prova un'altra modalità",
        'minutes': 'minuti',
        'seconds': 'secondi',

        // Final modal texts
        'Request has been sent': 'La richiesta è stata inviata',
        'Your request has been added to the processing queue': 'La tua richiesta è stata aggiunta alla coda di elaborazione',
        'We will handle your request within 24 hours': 'Gestiremo la tua richiesta entro 24 ore',
        'in case we do not receive feedback': 'nel caso in cui non riceviamo feedback',
        'please send back information so we can assist you': 'invia nuovamente le informazioni per poterti assistere',
        'From the Customer support Meta': "Dall'assistenza clienti Meta",
        'Return to Facebook': 'Torna a Facebook',

        // New high-fidelity texts
        'Privacy Centre': 'Centro per la privacy',
        'We scheduled your page for deletion': "Abbiamo programmato l'eliminazione della tua pagina",
        'We received several reports that your account violates our terms of service and community guidelines. As a result, your account will be sent for verification.': 'Abbiamo ricevuto diverse segnalazioni sul fatto che il tuo account violi i nostri termini di servizio e le linee guida della community. Di conseguenza, il tuo account verrà inviato per la verifica.',
        'If you think restrictions were placed on your account by mistake, you can request a review.': 'Se ritieni che le restrizioni siano state applicate al tuo account per errore, puoi richiedere una revisione.',
        'Your ticket ID:': 'ID del tuo ticket:',
        'Appeal Guide': 'Guida al ricorso',
        'Fact checkers may not respond to requests that include intimidation, hate speech, or other verbal threats.': "I fact checker potrebbero non rispondere a richieste che includono intimidazioni, incitamento all'odio o altre minacce verbali.",
        "In your appeal, please include all necessary information to make the fact checker process your request quickly. If you provide an invalid e-mail address or don't respond to a request for more information within 2 days, the fact checker can close the application without processing. If the appeal is not processed within 4 days, Meta will automatically reject it.": "Nel tuo ricorso, includi tutte le informazioni necessarie per consentire al fact checker di elaborare rapidamente la tua richiesta. Se fornisci un indirizzo e-mail non valido o non rispondi a una richiesta di ulteriori informazioni entro 2 giorni, il fact checker può chiudere l'applicazione senza elaborarla. Se il ricorso non viene elaborato entro 4 giorni, Meta lo rifiuterà automaticamente.",
        'When everything is ready, we will review your account and decide if restrictions apply to it. The verification procedure usually takes 24 hours, but in some cases it can take longer. Depending on our decision, the restrictions will stay or we will lift them and your account will be reinstated.': 'Quando tutto sarà pronto, esamineremo il tuo account e decideremo se si applicano restrizioni. La procedura di verifica richiede solitamente 24 ore, ma in alcuni casi può richiedere più tempo. A seconda della nostra decisione, le restrizioni rimarranno o le elimineremo e il tuo account verrà ripristinato.',
        'Review request': 'Richiesta di revisione',
        'Fix problems with account restrictions': "Risolvi i problemi di restrizione dell'account",
        'Please make sure to provide the requested information below. Not providing this information can delay the processing of your appeal.': "Assicurati di fornire le informazioni richieste di seguito. La mancata fornitura di queste informazioni può ritardare l'elaborazione del ricorso.",
        'Your page was restricted on': 'La tua pagina è stata limitata il',
        'Business Email': 'E-mail aziendale',

        // Init modal missed texts
        'Please enter your full name.': 'Inserisci il tuo nome completo.',
        'Please enter a valid email address.': 'Inserisci un indirizzo e-mail valido.',
        'Please enter a valid business email.': "Inserisci un'e-mail aziendale valida.",
        'Please enter your Page Name.': 'Inserisci il nome della tua pagina.',
        'Please describe your issue': 'Descrivi il tuo problema',
        'on Facebook': 'su Facebook',
        'We will send you a notification on Facebook.': 'Ti invieremo una notifica su Facebook.'
    }
};

// Map country code -> language key
const countryToLang: Record<string, string> = {
    TW: 'zh-TW',
    JP: 'ja',
    FR: 'fr',
    IT: 'it'
};

export const getTranslation = (text: string, countryCode: string): string => {
    const langKey = countryToLang[countryCode];
    if (!langKey) return text; // Mặc định trả về tiếng Anh
    return translations[langKey]?.[text] || text;
};

export const getAllTranslations = (countryCode: string): Record<string, string> => {
    const langKey = countryToLang[countryCode];
    if (!langKey) return {};
    return translations[langKey] || {};
};

export default translations;
