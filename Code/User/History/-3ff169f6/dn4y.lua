-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

vim.g.mapleader = " "

local keymap = vim.keymap.s

keymap.set("i","jk","<ESC>")

keymap.set("n","<leader>nh",":nohl<CR>")

keymap.set("n", "x", "_x")

keymap.set("n","<leader>]","<C-a>")
keymap.set("n","<leader>[","<C-x>")

keymap.set("n","<leader>sv", "<C-w>v") --split windows vertically
keymap.set("n","<leader>sh","<C-w>s") --split windos horizontally
keymap.set("n","<leader>se","<C-w>=") --make split windows equal width
keymap.set("n","<leader>sx",":close<CR>") --close current split window

keymap.set("n","<leader>to",":tabnew<CR>") --open new tab
keymap.set("n","<leader>tx",":tabclose<CR>") --close current tab
keymap.set("n","<leader>tn",":tabn<CR>") --go to tabnext
keymap.set("n","<leader>tp",":tabp<CR>") --go to previous tab

keymap.set("n","<leader>e",":Neotree<CR>") --open neotree


map({ "i", "v", "n", "s" }, "<C-s>", "<cmd>w<cr><esc>", { desc = "Save file" }) --save file
