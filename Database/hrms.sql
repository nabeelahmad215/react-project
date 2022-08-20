-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2022 at 08:07 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee_info`
--

CREATE TABLE `employee_info` (
  `id` int(255) NOT NULL,
  `tenant_id` int(255) DEFAULT NULL,
  `emp_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `marital` varchar(255) DEFAULT NULL,
  `cnic` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `institute` varchar(255) DEFAULT NULL,
  `completedate` date DEFAULT NULL,
  `basicsalary` int(255) DEFAULT NULL,
  `salarytax` int(255) DEFAULT NULL,
  `grosssalary` int(255) DEFAULT NULL,
  `joindate` date DEFAULT NULL,
  `emptype` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_info`
--

INSERT INTO `employee_info` (`id`, `tenant_id`, `emp_code`, `name`, `fname`, `gender`, `dob`, `religion`, `marital`, `cnic`, `contact`, `address`, `qualification`, `degree`, `institute`, `completedate`, `basicsalary`, `salarytax`, `grosssalary`, `joindate`, `emptype`, `designation`, `department`, `status`) VALUES
(47, NULL, 'EMP-001', 'Nabeel Ahmad', 'Jamil Ahmad', 'Male', '1996-08-08', 'Islam', 'Married', '3520166889763', '03234720215', 'Home Address', 'M. Phil CS', 'M. Phil Computer Science', 'Minhaj University', '2022-08-06', 50000, 7, 46500, '2020-02-17', 'Permanent', 'Manager Customer Support', 'IT', 'Active'),
(48, NULL, 'EMP-002', 'Asim Qureshi', 'Muhammad Yaqoob', 'Male', '1988-05-31', 'Islam', 'Married', '3520166739873', '03001234567', 'Daroghawala', 'Matric', 'SSC', 'BISE LHR', '2007-05-01', 40000, 7, 37200, '2019-09-05', 'Internee', 'Office Boy', 'Admin', 'Active'),
(49, NULL, 'EMP-003', 'Amna Aslam', 'Aslam Khan', 'Female', '2003-05-01', 'Jew', 'Non-Married', '3520298468749', '03002934458', 'DHA Phase 7', 'Masters', 'MS Marketing', 'UCP', '2019-11-06', 70000, 7, 65100, '2020-09-06', 'Permanent', 'Marketing Manager', 'IT', 'Active'),
(50, NULL, 'EMP-004', 'Hina Pervaiz', 'Pervaiz Butt', 'Female', '1989-06-02', 'Hindu', 'Married', '3590148957389', '03451234943', 'Larkana, Sindh', 'Masters', 'Human Resource', 'Iqra University', '2017-05-01', 60000, 7, 55800, '2020-07-15', 'Permanent', 'HR Manager', 'IT', 'Active'),
(51, NULL, '87878787788787878787', 'Kaiser Waseem', 'xdvdfgdfgdfgfd', 'Male', NULL, 'Islam', NULL, '3234234234234', '03234720215', NULL, 'FSC', 'Inter', 'my school', '2022-07-27', 345345, 1, 341892, NULL, NULL, NULL, 'IT', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblleave`
--

CREATE TABLE `tblleave` (
  `id` int(255) NOT NULL,
  `emp_id` int(255) DEFAULT NULL,
  `emp_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `from_date` varchar(255) DEFAULT NULL,
  `to_date` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblleave`
--

INSERT INTO `tblleave` (`id`, `emp_id`, `emp_code`, `name`, `from_date`, `to_date`, `type`, `reason`, `status`) VALUES
(4, 47, 'EMP-001', 'Nabeel Ahmad', '2022-07-20', '2022-07-13', 'Casual', 'reasin detals', 'Pending'),
(5, 48, 'EMP-002', 'Asim Qureshi', '2022-07-05', '2022-07-11', 'Sick', 'lkhv yrcutuytyvuyt y yiu', 'Approved'),
(6, 47, 'EMP-001', 'Nabeel Ahmad', '2022-07-07', '2022-07-05', 'Sick', 'dsfdffdfdf', 'Pending'),
(8, 50, 'EMP-004', 'Hina Pervaiz', '2022-07-07', '2022-07-15', 'Annual', NULL, 'Reject'),
(9, 48, 'EMP-002', 'Asim Qureshi', NULL, NULL, 'Sick', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblpayroll`
--

CREATE TABLE `tblpayroll` (
  `id` int(255) NOT NULL,
  `salary_month` varchar(255) DEFAULT NULL,
  `emp_id` int(255) DEFAULT NULL,
  `emp_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gross_salary` int(255) DEFAULT NULL,
  `allownce` int(255) DEFAULT NULL,
  `deduction` int(255) DEFAULT NULL,
  `reimburstment` int(255) DEFAULT NULL,
  `net_total` int(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblpayroll`
--

INSERT INTO `tblpayroll` (`id`, `salary_month`, `emp_id`, `emp_code`, `name`, `gross_salary`, `allownce`, `deduction`, `reimburstment`, `net_total`, `detail`, `status`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblpromotion`
--

CREATE TABLE `tblpromotion` (
  `id` int(255) NOT NULL,
  `tenant_id` varchar(255) DEFAULT NULL,
  `emp_id` varchar(255) DEFAULT NULL,
  `emp_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `promotion_date` varchar(255) DEFAULT NULL,
  `promoted_from` varchar(255) DEFAULT NULL,
  `promoted_to` varchar(255) DEFAULT NULL,
  `current_salary` int(255) DEFAULT NULL,
  `promoted_salary` int(255) DEFAULT NULL,
  `promoted_tax` int(255) DEFAULT NULL,
  `promoted_gross` int(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblpromotion`
--

INSERT INTO `tblpromotion` (`id`, `tenant_id`, `emp_id`, `emp_code`, `name`, `promotion_date`, `promoted_from`, `promoted_to`, `current_salary`, `promoted_salary`, `promoted_tax`, `promoted_gross`, `detail`) VALUES
(74, NULL, '43', 'csldkmlsd;m', 'NABEEL', '2022-07-06', 'Chairman', 'Cook', 1000, 50000, 10, 45000, 'Promtion Details');

-- --------------------------------------------------------

--
-- Table structure for table `tblreimburstment`
--

CREATE TABLE `tblreimburstment` (
  `id` int(255) NOT NULL,
  `doc_date` varchar(255) DEFAULT NULL,
  `emp_id` int(255) DEFAULT NULL,
  `emp_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `amount` int(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblreimburstment`
--

INSERT INTO `tblreimburstment` (`id`, `doc_date`, `emp_id`, `emp_code`, `name`, `category`, `amount`, `detail`, `status`) VALUES
(4, '2022-07-14', 49, 'EMP-003', 'Amna Aslam', 'Medical Expense', 7600, 'travel expense detail', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `tblresignation`
--

CREATE TABLE `tblresignation` (
  `id` int(255) NOT NULL,
  `tenant_id` varchar(255) DEFAULT NULL,
  `doc_date` varchar(255) DEFAULT NULL,
  `emp_id` varchar(255) DEFAULT NULL,
  `emp_code` varchar(255) DEFAULT NULL,
  `resignation_date` varchar(255) DEFAULT NULL,
  `notice_date` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblresignation`
--

INSERT INTO `tblresignation` (`id`, `tenant_id`, `doc_date`, `emp_id`, `emp_code`, `resignation_date`, `notice_date`, `detail`, `status`) VALUES
(13, NULL, '2022-07-07', '47', 'EMP-001', '2022-07-06', '2022-07-05', NULL, NULL),
(14, NULL, '2022-07-01', '49', 'EMP-003', '2022-07-08', '2022-07-16', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `0` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`, `0`) VALUES
(1, 'nabeel', 'nabeelahmad55@gmail.com', '123', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_react`
--

CREATE TABLE `user_react` (
  `id` int(255) NOT NULL,
  `tenant_id` int(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `mobile` int(255) DEFAULT NULL,
  `cnic` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` enum('Active','Inactive') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_react`
--

INSERT INTO `user_react` (`id`, `tenant_id`, `company`, `mobile`, `cnic`, `email`, `password`, `status`) VALUES
(52, 1122, 'Hasd', NULL, NULL, 'nabeelahmad55@gmail.com', 'jhvjb', NULL),
(53, 222, 'NABEEL', NULL, NULL, 'nabeelahmad55@gmail.com', 'kjkkjkjn', NULL),
(76, 0, 'Hasd', NULL, NULL, NULL, NULL, NULL),
(77, 0, 'NABEEL', NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee_info`
--
ALTER TABLE `employee_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tblleave`
--
ALTER TABLE `tblleave`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblpayroll`
--
ALTER TABLE `tblpayroll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblpromotion`
--
ALTER TABLE `tblpromotion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblreimburstment`
--
ALTER TABLE `tblreimburstment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblresignation`
--
ALTER TABLE `tblresignation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_react`
--
ALTER TABLE `user_react`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee_info`
--
ALTER TABLE `employee_info`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblleave`
--
ALTER TABLE `tblleave`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tblpayroll`
--
ALTER TABLE `tblpayroll`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tblpromotion`
--
ALTER TABLE `tblpromotion`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `tblreimburstment`
--
ALTER TABLE `tblreimburstment`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tblresignation`
--
ALTER TABLE `tblresignation`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_react`
--
ALTER TABLE `user_react`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
