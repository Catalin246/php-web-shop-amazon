-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jan 21, 2024 at 01:42 PM
-- Server version: 11.1.2-MariaDB-1:11.1.2+maria~ubu2204
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `developmentdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `num_sales` int(11) DEFAULT 0,
  `amount` int(11) DEFAULT NULL,
  `display` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `category_id`, `name`, `description`, `image`, `price`, `num_sales`, `amount`, `display`) VALUES
(41, 1, 'Amp It Up', 'A guide to amplifying your skills and talents in various aspects of life.', 'assets/images/b1.jpg', 24.99, 0, 100, 1),
(42, 1, 'The Seven Principles of Professional Services', 'Learn the key principles for delivering professional services effectively.', 'assets/images/b2.jpg', 29.99, 0, 100, 1),
(43, 1, 'The Assamese Verb', 'A comprehensive study of the Assamese verb structure and usage.', 'assets/images/b3.jpg', 19.99, 0, 100, 1),
(44, 1, 'NIV Holy Bible', 'The New International Version of the Holy Bible for spiritual guidance.', 'assets/images/b4.jpg', 39.99, 0, 100, 1),
(45, 1, 'The Bible Easy', 'An easy-to-understand version of the Bible for readers of all ages.', 'assets/images/b5.jpg', 34.99, 0, 100, 1),
(46, 1, 'Power Your Personality', 'Unlock the potential within yourself and enhance your personality.', 'assets/images/b6.jpg', 27.99, 0, 100, 1),
(47, 1, 'Antony Thomas: Life Through Poems', 'Explore life through the poetic expressions of Antony Thomas.', 'assets/images/b7.jpg', 22.99, 0, 100, 1),
(48, 1, 'Women Language and Power', 'An insightful examination of the language and power dynamics among women.', 'assets/images/b8.jpg', 31.99, 0, 100, 1),
(49, 1, 'Management Tips 2', 'Additional tips and strategies for effective management in various domains.', 'assets/images/b9.jpg', 26.99, 0, 100, 1),
(50, 1, 'Mastering the Art of Negotiation', 'Enhance your negotiation skills with practical insights and techniques.', 'assets/images/b10.jpg', 29.99, 0, 100, 1),
(52, 2, 'UltraSlim Laptop Pro', 'Thin and lightweight laptop for professionals on the go.', 'assets/images/pc2.jpg', 1299.99, 20, 100, 1),
(53, 2, 'Multimedia Master 3000', 'Perfect for media enthusiasts with stunning display and audio.', 'assets/images/pc3.jpg', 1599.99, 25, 100, 1),
(54, 2, 'ProfessionalBook X1', 'Designed for business professionals with top-notch security features.', 'assets/images/pc4.jpg', 1699.99, 22, 100, 1),
(55, 2, 'Student Edition 2023', 'Affordable and reliable laptop for students.', 'assets/images/pc5.jpg', 899.99, 15, 100, 1),
(56, 2, 'Powerhouse Pro 15', 'High-performance laptop for demanding tasks and applications.', 'assets/images/pc6.jpg', 1999.99, 28, 100, 1),
(57, 2, 'Traveler\'s Companion', 'Compact and lightweight laptop for on-the-go professionals.', 'assets/images/pc7.jpg', 1299.99, 20, 100, 1),
(59, 2, 'ProBook Elite 2023', 'Premium laptop for professional users seeking reliability.', 'assets/images/pc9.jpg', 1799.99, 26, 100, 1),
(61, 2, 'Creator\'s Dream Studio', 'Designed for content creators with powerful graphics and processing.', 'assets/images/pc11.jpg', 1999.99, 30, 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `display` tinyint(1) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `description`, `display`, `image_url`) VALUES
(1, 'Books', 'Books', 1, 'assets/images/categories/books.jpg'),
(2, 'Electronics', 'Electronics', 1, 'assets/images/categories/electronics.jpg'),
(3, 'Kids', 'Kids', 1, 'assets/images/categories/kids.jpg'),
(4, 'Light', 'Light', 1, 'assets/images/categories/light.jpg'),
(5, 'Easy Return', 'Easy Return', 1, 'assets/images/categories/easy return.jpg'),
(6, 'Find Your Deal', 'Find Your Deal', 1, 'assets/images/categories/find your deal.jpg'),
(7, 'Fitness', 'Fitness', 1, 'assets/images/categories/fitness.jpg'),
(8, 'Shop Valentine', 'Shop Valentine', 1, 'assets/images/categories/shop valentine.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `order_id`, `article_id`, `quantity`) VALUES
(1, 1, 52, 3),
(2, 2, 53, 2),
(3, 3, 54, 1),
(4, 4, 55, 4),
(5, 5, 56, 5),
(6, 6, 456, 2),
(7, 6, 789, 1),
(8, 100000, 456, 2),
(9, 100000, 789, 1),
(10, 100006, 456, 2),
(11, 100006, 789, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `delivered` tinyint(1) NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `delivered`, `paid`, `user_id`) VALUES
(100001, 1, 1, 69),
(100002, 1, 1, 69),
(100003, 1, 1, 69),
(100004, 1, 1, 70),
(100005, 1, 1, 70);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `name` varchar(90) NOT NULL,
  `phone` varchar(14) DEFAULT NULL,
  `user_role_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `name`, `phone`, `user_role_id`, `password`) VALUES
(68, 'admin@example.com', 'Admin', '', 2, '$2y$10$GmlVphbh50eFd4qRvaQ/QO5spU07LX445yn7U.Ue4Nx/TjRHXCxvm'),
(69, 'catalin@example.com', 'Catalin', '0629765123', 1, '$2y$10$5H9L8N.T03wE7WNuNzoYT.XDyDCUDinc0AyTEeMPjgnsU0JcwY1sm'),
(70, 'john@example.com', 'John', '061238767', 1, '$2y$10$TM2HmR8LzxfoSQ4QCSg/1.pqG65/eJZPDI8AQhRz2kLTBJl5RR7zy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100007;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
